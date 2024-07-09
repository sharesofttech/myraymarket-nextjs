import PropTypes from "prop-types";
import clsx from "clsx";
import TabContainer from "react-bootstrap/TabContainer";
import TabContent from "react-bootstrap/TabContent";
import TabPane from "react-bootstrap/TabPane";
import Nav from "react-bootstrap/Nav";
import BidsTabContent from "./bids-tab-content";
import DetailsTabContent from "./details-tab-content";
import HistoryTabContent from "./history-tab-content";

const BidTab = ({ className, bids, owner, properties, tags, history }) => (
    <TabContainer defaultActiveKey="nav-home">
        <div className={clsx("tab-wrapper-one", className)}>
            <nav className="tab-button-one">
                <Nav as="div" className="nav-tabs">
                    <Nav.Link as="button" eventKey="nav-home">
                        {/* Bids */}
                        {/* {global.language["Bids"]} */}
                        {global?.language!=undefined && global.language["Bids"]!=undefined? global?.language["Bids"] : "Bids"}
                    </Nav.Link>
                    <Nav.Link as="button" eventKey="nav-profile">
                        {/* Details */}
                        {/* {global.language["Details"]} */}
                        {global?.language!=undefined && global.language["Details"]!=undefined? global?.language["Details"] : "Details"}
                    </Nav.Link>
                    <Nav.Link as="button" eventKey="nav-contact">
                        {/* History */}
                        {/* {global.language["History"]} */}
                        {global?.language!=undefined && global.language["History"]!=undefined? global?.language["History"] : "History"}

                    </Nav.Link>
                </Nav>
            </nav>
            <TabContent className="rn-bid-content">
                <TabPane eventKey="nav-home">
                    <BidsTabContent bids={bids} />
                </TabPane>
                <TabPane eventKey="nav-profile">
                    <DetailsTabContent
                        owner={owner}
                        properties={properties}
                        tags={tags}
                    />
                </TabPane>
                <TabPane eventKey="nav-contact">
                    <HistoryTabContent history={history} />
                </TabPane>
            </TabContent>
        </div>
    </TabContainer>
);

BidTab.propTypes = {
    className: PropTypes.string,
    bids: PropTypes.arrayOf(PropTypes.shape({})),
    owner: PropTypes.shape({}),
    properties: PropTypes.arrayOf(PropTypes.shape({})),
    tags: PropTypes.arrayOf(PropTypes.shape({})),
    history: PropTypes.arrayOf(PropTypes.shape({})),
};

export default BidTab;
