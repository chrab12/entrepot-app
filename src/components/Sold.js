import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Skeleton from '@material-ui/lab/Skeleton';
import extjs from '../ic/extjs.js';
const _showListingPrice = n => {
  n = Number(n) / 100000000;
  return n.toFixed(8).replace(/0{1,6}$/, '');
};
export default function Sold(props) {
  const [imgLoaded, setImgLoaded] = React.useState(false);
  const transaction = props.transaction;
  const index = extjs.decodeTokenId(transaction.token).index;
  const tokenid = transaction.token;
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
      margin: "0 auto",
      objectFit: "contain",
    },
  };
  const icpbunnyimg = i => {
    const icbstorage = ['efqhu-yqaaa-aaaaf-qaeda-cai',
    'ecrba-viaaa-aaaaf-qaedq-cai',
    'fp7fo-2aaaa-aaaaf-qaeea-cai',
    'fi6d2-xyaaa-aaaaf-qaeeq-cai',
    'fb5ig-bqaaa-aaaaf-qaefa-cai',
    'fg4os-miaaa-aaaaf-qaefq-cai',
    'ft377-naaaa-aaaaf-qaega-cai',
    'fu2zl-ayaaa-aaaaf-qaegq-cai',
    'f5zsx-wqaaa-aaaaf-qaeha-cai',
    'f2yud-3iaaa-aaaaf-qaehq-cai']

    return "https://" +icbstorage[i % 10]+".raw.ic0.app/Token/"+i;
  };
  const mintNumber = () => {
    if (props.collection === "bxdf4-baaaa-aaaah-qaruq-cai") return index;
    if (props.collection === "3db6u-aiaaa-aaaah-qbjbq-cai") return index;
    else return index+1;
  }
  const nftImg = () => {
    if (props.collection === "bxdf4-baaaa-aaaah-qaruq-cai") return "https://qcg3w-tyaaa-aaaah-qakea-cai.raw.ic0.app/Token/" + index;
    if (props.collection === "3db6u-aiaaa-aaaah-qbjbq-cai") return "https://d3ttm-qaaaa-aaaai-qam4a-cai.raw.ic0.app?tokenId=" + index;
    if (props.collection === "q6hjz-kyaaa-aaaah-qcama-cai")
      return icpbunnyimg(index)
    return "https://"+props.collection+".raw.ic0.app/?cc=0&type=thumbnail&tokenid=" + tokenid;
  };
  const nftLink = () => {
    if (props.collection === "bxdf4-baaaa-aaaah-qaruq-cai") return "https://qcg3w-tyaaa-aaaah-qakea-cai.raw.ic0.app/Token/" + index;
    if (props.collection === "3db6u-aiaaa-aaaah-qbjbq-cai") return "https://d3ttm-qaaaa-aaaai-qam4a-cai.raw.ic0.app?tokenId=" + index;
    if (props.collection === "q6hjz-kyaaa-aaaah-qcama-cai")
      return icpbunnyimg(index)
    return "https://"+props.collection+".raw.ic0.app/?tokenid=" + tokenid;
  };
  return (
    <Grid style={{height:'100%'}} item xl={(props.gridSize === "small" ? 3 : 2)} lg={(props.gridSize === "small" ? 3 : 2)} md={4} sm={6} xs={6}>
        <Card>
          <CardContent>
            <Grid container>
              <Grid item md={6} sm={6} xs={6}>
                <Typography style={{fontSize: 11, textAlign:"left", fontWeight:"bold"}} color={"inherit"} gutterBottom>
                  <Tooltip title="View in browser"><a style={{color:"black",textDecoration: 'none' }} href={"https://"+props.collection+".raw.ic0.app/?tokenid=" + tokenid} rel="noreferrer" target="_blank">{"#"+(mintNumber())}</a></Tooltip>
                </Typography>
              </Grid>
              {props.collection === "bzsui-sqaaa-aaaah-qce2a-cai" ?
              <Grid item md={6} sm={6} xs={6}>
                <Typography style={{fontSize: 11, textAlign:"right", fontWeight:"bold"}} color={"inherit"} gutterBottom>
                  <Tooltip title="NFT Rarity Index is a 3rd party metric by NFT Village. For this collection, it displays the color and trait rarity of a specific Bot relative to others. It does not include Mint #, Twin Status or Animation within the index."><a style={{color:"black",textDecoration: 'none' }} href={"https://nntkg-vqaaa-aaaad-qamfa-cai.ic.fleek.co/?tokenid=" + transaction.token} rel="noreferrer" target="_blank">NRI: {(props.gri*100).toFixed(1)}% <span style={{color:"red"}}>*</span></a></Tooltip>
                </Typography>
              </Grid> : ""}
              {props.collection === "bid2t-gyaaa-aaaah-qcdea-cai" ?
              <Grid item md={6} sm={6} xs={6}>
                <Typography style={{fontSize: 11, textAlign:"right", fontWeight:"bold"}} color={"inherit"} gutterBottom>
                  <Tooltip title="NFT Rarity Index is a 3rd party metric by NFT Village. For this collection, it displays the color and trait rarity of a specific Hampster relative to others. It does not include Mint #, Twin Status or Animation within the index."><a style={{color:"black",textDecoration: 'none' }} href={"https://nntkg-vqaaa-aaaad-qamfa-cai.ic.fleek.co/?tokenid=" + transaction.token} rel="noreferrer" target="_blank">NRI: {(props.gri*100).toFixed(1)}% <span style={{color:"red"}}>*</span></a></Tooltip>
                </Typography>
              </Grid> : ""}
              {props.collection === "gyuaf-kqaaa-aaaah-qceka-cai" ?
              <Grid item md={6} sm={6} xs={6}>
                <Typography style={{fontSize: 11, textAlign:"right", fontWeight:"bold"}} color={"inherit"} gutterBottom>
                  <Tooltip title="NFT Rarity Index is a 3rd party metric by NFT Village. For this collection, it displays the color and trait rarity of a specific Vampire relative to others. It does not include Mint #, Twin Status or Animation within the index."><a style={{color:"black",textDecoration: 'none' }} href={"https://nntkg-vqaaa-aaaad-qamfa-cai.ic.fleek.co/?tokenid=" + transaction.token} rel="noreferrer" target="_blank">NRI: {(props.gri*100).toFixed(1)}% <span style={{color:"red"}}>*</span></a></Tooltip>
                </Typography>
              </Grid> : ""}
              {props.collection === "oeee4-qaaaa-aaaak-qaaeq-cai" ?
              <Grid item md={6} sm={6} xs={6}>
                <Typography style={{fontSize: 11, textAlign:"right", fontWeight:"bold"}} color={"inherit"} gutterBottom>
                  <Tooltip title="NFT Rarity Index is a 3rd party metric by NFT Village. For this collection, it displays the color and trait rarity of a specific Motoko relative to others. It does not include Mint #, Twin Status or Animation within the index."><a style={{color:"black",textDecoration: 'none' }} href={"https://nntkg-vqaaa-aaaad-qamfa-cai.ic.fleek.co/?tokenid=" + transaction.token} rel="noreferrer" target="_blank">NRI: {(props.gri*100).toFixed(1)}% <span style={{color:"red"}}>*</span></a></Tooltip>
                </Typography>
              </Grid> : ""}
              {props.collection === "e3izy-jiaaa-aaaah-qacbq-cai" ?
              <Grid item md={6} sm={6} xs={6}>
                <Typography style={{fontSize: 11, textAlign:"right", fontWeight:"bold"}} color={"inherit"} gutterBottom>
                  <Tooltip title="NFT Rarity Index is a 3rd party metric by NFT Village. For this collection, it displays the color and trait rarity of a specific Cronic relative to others. It does not include Mint #, Twin Status or Animation within the index."><a style={{color:"black",textDecoration: 'none' }} href={"https://nntkg-vqaaa-aaaad-qamfa-cai.ic.fleek.co/?tokenid=" + transaction.token} rel="noreferrer" target="_blank">NRI: {(props.gri*100).toFixed(1)}% <span style={{color:"red"}}>*</span></a></Tooltip>
                </Typography>
              </Grid> : ""}
              {props.collection === "nbg4r-saaaa-aaaah-qap7a-cai" ?
              <Grid item md={6} sm={6} xs={6}>
                <Typography style={{fontSize: 11, textAlign:"right", fontWeight:"bold"}} color={"inherit"} gutterBottom>
                  <Tooltip title="NFT Rarity Index is a 3rd party metric by NFT Village. For this collection, it displays the color and trait rarity of a specific Star relative to others. It does not include Mint # or Twin Status as factors in this index."><a style={{color:"black",textDecoration: 'none' }} href={"https://nntkg-vqaaa-aaaad-qamfa-cai.ic.fleek.co/?tokenid=" + tokenid} rel="noreferrer" target="_blank">NRI: {(props.gri*100).toFixed(1)}% <span style={{color:"red"}}>*</span></a></Tooltip>
                </Typography>
              </Grid> : ""}
              {props.collection === "bxdf4-baaaa-aaaah-qaruq-cai" ?
              <Grid item md={6} sm={6} xs={6}>
                <Typography style={{fontSize: 11, textAlign:"right", fontWeight:"bold"}} color={"inherit"} gutterBottom>
                  <Tooltip title="NFT Rarity Index is a 3rd party metric by NFT Village. For this collection, it displays the color and trait rarity of a specific ICPunk relative to others. It does not include Mint # or Twin Status as factors in this index."><a style={{color:"black",textDecoration: 'none' }} href={"https://nntkg-vqaaa-aaaad-qamfa-cai.ic.fleek.co/?collection=punks&tokenid=" + mintNumber()} rel="noreferrer" target="_blank">NRI: {(props.gri*100).toFixed(1)}% <span style={{color:"red"}}>*</span></a></Tooltip>
                </Typography>
              </Grid> : ""}
              {props.collection === "3db6u-aiaaa-aaaah-qbjbq-cai" ?
              <Grid item md={6} sm={6} xs={6}>
                <Typography style={{fontSize: 11, textAlign:"right", fontWeight:"bold"}} color={"inherit"} gutterBottom>
                  <Tooltip title="NFT Rarity Index is a 3rd party metric by NFT Village. For this collection, it displays the trait rarity of a specific IC Drip relative to others. It does not include Mint # as a factor in this index."><a style={{color:"black",textDecoration: 'none' }} href={"https://nntkg-vqaaa-aaaad-qamfa-cai.ic.fleek.co/?collection=drips&tokenid=" + mintNumber()} rel="noreferrer" target="_blank">NRI: {(props.gri*100).toFixed(1)}% <span style={{color:"red"}}>*</span></a></Tooltip>
                </Typography>
              </Grid> : ""}
              {props.collection === "njgly-uaaaa-aaaah-qb6pa-cai" ?
              <Grid item md={6} sm={6} xs={6}>
                <Typography style={{fontSize: 11, textAlign:"right", fontWeight:"bold"}} color={"inherit"} gutterBottom>
                  <Tooltip title="NFT Rarity Index is a 3rd party metric by NFT Village. For this collection, it displays the trait rarity of a specific ICPuppy relative to others. It does not include Mint # as a factor in this index."><a style={{color:"black",textDecoration: 'none' }} href={"https://nntkg-vqaaa-aaaad-qamfa-cai.ic.fleek.co/?tokenid=" + tokenid} rel="noreferrer" target="_blank">NRI: {(props.gri*100).toFixed(1)}% <span style={{color:"red"}}>*</span></a></Tooltip>
                </Typography>
              </Grid> : ""}
              {props.collection === "ahl3d-xqaaa-aaaaj-qacca-cai" ?
              <Grid item md={6} sm={6} xs={6}>
                <Typography style={{fontSize: 11, textAlign:"right", fontWeight:"bold"}} color={"inherit"} gutterBottom>
                  <Tooltip title="NFT Rarity Index is a 3rd party metric by NFT Village. For this collection, it displays the trait rarity of a specific ICTuTs relative to others. It does not include Mint # as a factor in this index."><a style={{color:"black",textDecoration: 'none' }} href={"https://nntkg-vqaaa-aaaad-qamfa-cai.ic.fleek.co/?tokenid=" + tokenid} rel="noreferrer" target="_blank">NRI: {(props.gri*100).toFixed(1)}% <span style={{color:"red"}}>*</span></a></Tooltip>
                </Typography>
              </Grid> : ""}
              {props.collection === "sr4qi-vaaaa-aaaah-qcaaq-cai" ?
              <Grid item md={6} sm={6} xs={6}>
                <Typography style={{fontSize: 11, textAlign:"right", fontWeight:"bold"}} color={"inherit"} gutterBottom>
                  <Tooltip title="NFT Rarity Index is a 3rd party metric by NFT Village. For this collection, it displays the trait rarity of a specific Astronaut relative to others. It does not include Mint # as a factor in this index."><a style={{color:"black",textDecoration: 'none' }} href={"https://nntkg-vqaaa-aaaad-qamfa-cai.ic.fleek.co/?tokenid=" + tokenid} rel="noreferrer" target="_blank">NRI: {(props.gri*100).toFixed(1)}% <span style={{color:"red"}}>*</span></a></Tooltip>
                </Typography>
              </Grid> : ""}
            </Grid>

            <a href={nftLink()} target="_blank" rel="noreferrer">
              <div style={{...styles.avatarSkeletonContainer}}>
                <img alt={tokenid} style={{...styles.avatarImg, display:(imgLoaded ? "block" : "none")}} src={nftImg()} onLoad={() => setImgLoaded(true)} />
                <Skeleton style={{...styles.avatarLoader, display:(imgLoaded ? "none" : "block")}} variant="rect"  />
              </div>
            </a>
            
            
            <Typography style={{fontSize: 12, textAlign:"left", fontWeight:"bold"}} color={"inherit"} gutterBottom>
              <small>Sale Price</small><br />
              {_showListingPrice(transaction.price)} ICP
            </Typography>
          </CardContent>
        </Card>
    </Grid>
  );
}

