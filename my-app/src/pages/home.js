import React from "react";

export default function Home() {
  return (
      <div>
        <header>
          <div className="row">
            <div className="col-8">
              <button id="b1">החשבון שלי</button>
            </div>
            <div className="col-2">
              <img
                src="https://i.ibb.co/sPvbD61/11.png"
                alt="image"
                style={{ width: 100 }}
              />
            </div>
          </div>
        </header>
        <div className="row">
          <div className="col-1" />
          <div className="col-10">
            <div className="container" id="c1">
              <div className="row">
                <div className="col-2">
                  <img
                    src="https://i.ibb.co/ZSc9LFN/12.png"
                    alt="image boy"
                    id="m2"
                  />
                </div>
                <div className="col-10">
                  <div className="row" id="r2">
                    <div className="col-12">
                      <h3
                        style={{ color: "rgb(240, 8, 8)", fontWeight: "bold" }}
                      >
                        מעקב משלוחים
                      </h3>
                    </div>
                    <div className="col-12">
                      <br />
                      <br />
                      <h5>
                        מידע מקוון על פריטים אשר נשלחו באמצעות דואר שליחים, דואר
                        רשום בפנים הארץ, שירותים לחו"ל ומחו"ל: EMS, ECO POST.
                        <br /> <br />
                      </h5>
                    </div>
                    <div className="col-12">
                      <h5> :מספר מעקב </h5>
                      <p> LS708745684CH </p>
                    </div>
                    <div className="col-12">
                      <h5> :קוד התייחסות </h5>
                      <p> 886302903 </p>
                    </div>
                    <div className="col-12">
                      <h5> :דמי משלוח </h5>
                      <p> 6.21 ILS </p>
                    </div>
                    <div className="col-12">
                      <a id="b2" href="/in1">התקדם לתשלום</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-2" />
        </div>
        <footer>
          <div
            className="row"
            style={{ backgroundColor: "rgb(255, 255, 254)" }}
          >
            <div className="col-12">
              <img src="https://i.ibb.co/0JBt00p/11.png" alt="image" />
            </div>
            <div className="col-12"> דואר ישראל </div>
            <div className="col-12"> כל הזכויות שמורות © </div>
          </div>
        </footer>
      </div>
  );
}
