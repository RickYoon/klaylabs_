import React,{useState, useContext} from "react";
import styled from 'styled-components';
import ReactLoading from 'react-loading';
import klaytnLogo from "../../assets/uiux/klaytnLogo.png"
import icons from "../../assets/tokenIcons"
import { WalletContext } from 'components/context/WalletContext';
import arrowBack from '../../assets/uiux/arrowBack.svg'


const WalletTokenDetailTable = () => {

    const [isLoading, setIsLoading] = useState(false)
    const {assetState,serviceState,setServiceState} = useContext(WalletContext);
    // console.log(assetState)

    const backToOverview = () => {
        setServiceState("overview")
    }


    return (
        <>
        {isLoading ?
            <></> :

            <SubTemplateBlockVertical style={{marginTop:"50px"}}>
                <div style={{ fontSize: "18px", color: "#657795" }}>Tokens
                    <span style={{ fontSize: "24px" }}> : $ {assetState.tokenBalance}</span>
                </div>

                <Table>
                    <Thead>
                        <Th styled={{textAlign:"left"}}>Token</Th>
                        <Th styled={{textAlign:"right"}}>project</Th>
                        <Thr styled={{textAlign:"right"}}>Price</Thr>
                        <Thr>Balance</Thr>
                        <Thr>value ($)</Thr>
                    </Thead>
                    {assetState.tokenList.map((token) => (
                    <tbody>
                        <Tr>
                            <Td><img src={icons[token.tokenName]} alt="logo" height="25px" style={{ marginRight:"10px",padding: "1px", verticalAlign: "middle", borderRadius: "15px" }} />{token.tokenName}</Td>
                            <Td>{token.project}</Td>
                            <Tdr>{token.tokenPrice.toFixed(3)}</Tdr>
                            <Tdr>{token.tokenBalance.toFixed(3)}</Tdr>
                            <Tdr>{token.tokenValue.toFixed(3)}</Tdr>
                        </Tr>
                    </tbody>
                    ))}
                </Table>

                
            </SubTemplateBlockVertical>
        }

        </>
    )
}


const Tr = styled.tr`
    height: 45px;
    background: #fff;
`

const Td = styled.td`
    color: #050f19;
    padding: 12px 29px!important;
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
    text-align: left;
    border-bottom: 1px solid #edeff1 !important;
`

const Tdr = styled.td`
    color: #050f19;
    padding: 12px 29px!important;
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
    text-align: right;
    border-bottom: 1px solid #edeff1 !important;
`


const Thr = styled.th`
    cursor: auto;
    background: #f9fafb;
    text-align: inherit;
    color: rgba(0,0,0,.87);
    padding: 12px 29px!important;
    font-style: none;
    font-weight: 700;
    text-transform: none;
    border-bottom: 1px solid rgba(34,36,38,.1);
    border-left: none;
    text-align:right;
`

const Th = styled.th`
    cursor: auto;
    background: #f9fafb;
    text-align: inherit;
    color: rgba(0,0,0,.87);
    padding: 12px 29px!important;
    font-style: none;
    font-weight: 700;
    text-transform: none;
    border-bottom: 1px solid rgba(34,36,38,.1);
    border-left: none;
`

const Thead = styled.thead`
    color: #657795!important;
    padding: 12px 29px!important;
    font-size: 15px;
    background: transparent!important;
    font-style: normal;
    font-weight: 600;
    text-transform: uppercase!important;
`

const Table = styled.table`
    width: 100%;
    background: #fff;
    margin: 1em 0;
    border: 1px solid rgba(34,36,38,.15);
    -webkit-box-shadow: none;
    box-shadow: none;
    border-radius: 0.28571429rem;
    color: rgba(0,0,0,.87);
    border-collapse: separate;
    border-spacing: 0;
    
        
  @media screen and (max-width: 500px){
      width: 360px;
      font-size: 12px;
    }

`

const SubTemplateBlockVertical = styled.div`
     width: 900px;
    margin: 10px auto;
    padding-bottom: 10px;
    position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
    padding:15px;
    display:flex;
    flex-direction:column;

    padding: 20px 25px !important;
    background: #fff;

    color: rgba(0, 0, 0, 0.87);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    min-width: 0px;
    overflow-wrap: break-word;
    background-color: rgb(255, 255, 255);
    background-clip: border-box;
    border: 0px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.75rem;
    box-shadow: rgb(0 0 0 / 10%) 0rem 0.25rem 0.375rem -0.0625rem, rgb(0 0 0 / 6%) 0rem 0.125rem 0.25rem -0.0625rem;
    overflow: visible;
    
  @media screen and (max-width: 500px){
      width: 370px;
      margin: 10px 10px;
      font-size: 12px;
    }
`;


export default WalletTokenDetailTable;