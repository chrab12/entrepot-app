import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Skeleton from '@material-ui/lab/Skeleton';
import Button from '@material-ui/core/Button';
import Timestamp from 'react-timestamp';
import extjs from '../ic/extjs.js';
const _showListingPrice = n => {
  n = Number(n) / 100000000;
  return n.toFixed(8).replace(/0{1,6}$/, '');
};
export default function NFT(props) {
  const [imgLoaded, setImgLoaded] = React.useState(false);
  const styles = {
    avatarSkeletonContainer: {
      height: 0,
      overflow: "hidden",
      paddingTop: "100%",
      position: "relative"
    },
    avatarLoader: {
      position: "absolute",
      top: "15%",
      left: "15%",
      width: "70%",
      height: "70%",
      margin: "0 auto"
    },
    avatarImg: {
      position: "absolute",
      top: "0%",
      left: "0%",
      width: "100%",
      height: "100%",
      margin: "0 auto"
    },
    avatarImg2: {
      position: "absolute",
      top: "0%",
      left: "16.66%",
      height: "100%",
      margin: "0 auto"
    }
  };
  const buy = async () => {
    return props.buy(props.collection, props.listing);
  };
  
  return (
    <Grid style={{height:'100%'}} item xl={2} lg={3} md={4} sm={6} xs={12}>
        <Card>
          <CardContent>
            <Grid container>
              <Grid item md={6} sm={6} xs={6}>
                <Typography style={{fontSize: 11, textAlign:"left", fontWeight:"bold"}} color={"inherit"} gutterBottom>
                  <Tooltip title="View in browser"><a style={{color:"black",textDecoration: 'none' }} href={"https://"+props.collection+".raw.ic0.app/?tokenid=" + props.nft.id} rel="noreferrer" target="_blank">{"#"+(props.nft.index+1)}</a></Tooltip>
                </Typography>
              </Grid>
              {props.collection === "e3izy-jiaaa-aaaah-qacbq-cai" ?
              <Grid item md={6} sm={6} xs={6}>
                <Typography style={{fontSize: 11, textAlign:"right", fontWeight:"bold"}} color={"inherit"} gutterBottom>
                  <Tooltip title="NFT Rarity Index is a 3rd party metric by NFT Village. For this collection, it displays the color and trait rarity of a specific Cronic relative to others. It does not include Mint #, Twin Status or Animation within the index."><a style={{color:"black",textDecoration: 'none' }} href={"https://nntkg-vqaaa-aaaad-qamfa-cai.ic.fleek.co/?tokenid=" + props.nft.id} rel="noreferrer" target="_blank">NRI: {(props.gri*100).toFixed(1)}% <span style={{color:"red"}}>*</span></a></Tooltip>
                </Typography>
              </Grid> : ""}
            </Grid>

            <a href={"https://"+props.collection+".raw.ic0.app/?tokenid=" + props.nft.id} target="_blank" rel="noreferrer">
              <div style={{...styles.avatarSkeletonContainer}}>
                {props.collection !== "uzhxd-ziaaa-aaaah-qanaq-cai" ?
                <img alt={props.nft.id} style={{...styles.avatarImg, display:(imgLoaded ? "block" : "none")}} src={"https://"+props.collection+".raw.ic0.app/?type=thumbnail&tokenid=" + props.nft.id} onLoad={() => setImgLoaded(true)} />
                :
                <img alt={props.nft.id} style={{...styles.avatarImg2, display:(imgLoaded ? "block" : "none")}} src={"https://"+props.collection+".raw.ic0.app/?type=thumbnail&tokenid=" + props.nft.id} onLoad={() => setImgLoaded(true)} />
                }
                <Skeleton style={{...styles.avatarLoader, display:(imgLoaded ? "none" : "block")}} variant="circle"  />
              </div>
            </a>
            
              {props.nft.listing ?
              <Typography style={{fontSize: 13, textAlign:"center", fontWeight:"bold"}} color={"inherit"} gutterBottom>
                Listed @ {_showListingPrice(props.nft.listing.price)} ICP
              </Typography> : 
              <Typography style={{fontSize: 13, textAlign:"center", fontWeight:"bold"}} color={"inherit"} gutterBottom>Not Listed</Typography> }
              {props.loggedIn ? 
              <Typography style={{fontSize: 12, textAlign:"center"}} color={"inherit"} gutterBottom>
                {!props.nft.listing ?
                <Button onClick={() => props.listNft(props.nft)} size={"small"} variant="contained" color="primary" style={{backgroundColor:"#003240", color:"white"}}>Sell NFT</Button>
                : <>
                <Button onClick={() => props.listNft(props.nft)} size={"small"} variant="contained" color="primary" style={{backgroundColor:"#003240", color:"white", marginRight:10}}>Update</Button>
                <Button onClick={() => props.listNft(props.nft)} size={"small"} variant="contained" color="primary" style={{backgroundColor:"#003240", color:"white"}}>Cancel</Button>
                
                </>}
              
              </Typography>: ""}
          </CardContent>
        </Card>
    </Grid>
  );
}
