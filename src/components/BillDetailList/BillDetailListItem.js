import React from "react";
import { Icon, Divider } from "semantic-ui-react";

const BillDetailListItem = () => {
  return (
    <React.Fragment>
      <div className="d-flex bill_header table_margin_clients">
        <div className="flex-1">NAME</div>
        <div className="flex-1">VENUE</div>
        <div className="flex-1">DATE & TIME</div>
        <div className="flex-1">CAPACITY</div>
        <div className="flex-1">PRICE</div>
        <div className="flex-1">STATUS</div>
      </div>
      <br />
      <div className="d-flex bill_body align-items-center ">
        <div className="flex-1 flex-container align-items-center">
          We The Fest 2020
        </div>
        <div className="flex-1">
          <Icon name="map marker alternate" />
          Jiexpo Kemayoran
        </div>
        <div className="flex-1">16 Mar 2020, 6:30 PM</div>
        <div className="flex-1">200k</div>
        <div className="flex-1 bill_price_color">$50-$200</div>
        <div className="flex-1 bill_price_color">Published</div>
      </div>
      <div className="table_margin_clients">
        <Divider style={{ color: " #F3F3F7" }} />
      </div>
    </React.Fragment>
  );
};

export default BillDetailListItem;
