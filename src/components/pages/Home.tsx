import HomeBanner from "./home/HomeBanner";
import MessageToClient from "./home/MessageToClient";
import HomePortfolio from "./home/HomePortfolio";
import AppealToContact from "../AppealToContact";

export function Home() {
    return (
        <div>
            <HomeBanner/>
            <MessageToClient/>
            <HomePortfolio/>
            <AppealToContact/>
        </div>
    );
}

