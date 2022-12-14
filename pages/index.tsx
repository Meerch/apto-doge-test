import type {NextPage} from 'next'
import Intro from '../components/Intro'
import Options from "../components/Options";
import React from "react";
import Info from '../components/Info';
import Faq from '../components/Faq';
import Footer from '../components/Footer';
import InterlineLayer from "../components/InterlineLayer";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/reducers";
import {TypeCurrentPopup} from "../redux/reducers/popup";
import PopupConnectWallet from "../components/Popup/PopupConnectWallet";
import PopupBuyNft from "../components/Popup/PopupBuyNft";
import DotRing from "../components/DotRing/DotRing";
import {FieldPrintLogo} from "../components/FieldPrintLogo/FieldPrintLogo";
import PopupSuccess from "../components/Popup/PopupSuccess";
import Button from "../components/UI/Button";
import { changeCurrentPopup } from '../redux/actions/popup';

const Home: NextPage = () => {
    const {currentPopup}: { currentPopup: TypeCurrentPopup } = useSelector((state: RootState) => ({
        currentPopup: state.popup.currentPopup
    }))
    const dispatch = useDispatch()



    return (
        <>
            <div className='wrap'>
                {/*<Button onClick={() => dispatch(changeCurrentPopup('success'))}>CLICK</Button>*/}
                <DotRing />
                <Intro/>
                <InterlineLayer/>
                <Options/>
                <Info/>
                <Faq/>
                <Footer/>

                <FieldPrintLogo />

                {
                    currentPopup === 'connect-wallet' &&
                    <PopupConnectWallet />
                }
                {
                    currentPopup === 'buy-nft' &&
                    <PopupBuyNft />
                }
                {
                    currentPopup === 'success' &&
                    <PopupSuccess />
                }
                {/*{*/}
                {/*    currentPopup === 'get-free-nft' &&*/}
                {/*    <PopupGetFreeNft />*/}
                {/*}*/}
            </div>
        </>
    )
}

export default Home