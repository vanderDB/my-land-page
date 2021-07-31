import {HomeBannerImg} from "../../assets/img";
import styled from "styled-components";
import HomeBanner from "./home/HomeBanner";
import MessageToClient from "./home/MessageToClient";

export function Home() {
    return (
        <div>
            <HomeBanner />
            <MessageToClient />
        </div>
    );
};

