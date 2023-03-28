import React from "react";

export default function Index1() {
  return (
    <div>
      <div style={{ padding: 30 }}>
        <div className="row">
          <div className="col-3">
            <img
              src="https://i.ibb.co/XsMqsRf/15.png"
              alt="header image"
              id="m12"
            />
          </div>
          <div className="col-6">
            <img
              src="https://i.ibb.co/sPvbD61/11.png"
              alt="header image"
              style={{ marginTop: "-14px" }}
            />
          </div>
          <div className="col-3">
            <img src="https://i.ibb.co/vmZwf9q/14.png" alt={14} id="m32" />
          </div>
        </div>
      </div>
      <div className="container" id="c2">
        <div className="row">
          <div className="col-12">
            <div className="container" id="c3">
              <div id="d1">
                <br />
                <h3 id="p1" style={{ paddingBottom: 10 }}>
                  תשלום מיסים ועמלות
                </h3>
                <h6 id="p1" style={{ fontSize: "16.5px" }}>
                  יש לשלם באמצעות כרטיס אשראי
                </h6>
                <br />
                <h6 style={{ fontWeight: 650, fontSize: 12 }}>
                  עבור פריט הממתין במרכז מסירה לא ניתן לשלם במעמד איסוף הפריט עד
                  לביצוע התשלום ימתין הפריט במרכז המסירה למשך 48 שעות
                </h6>
                <br />
                <h6 style={{ fontWeight: 650, fontSize: 12 }}>
                  לאחר 48 שעות נתחיל בלקיחת עמלה של 6.21 ₪ ליום
                </h6>
                <br />
              </div>
              <br />
              <h3
                style={{
                  textAlign: "center",
                  color: "rgb(255, 5, 5)",
                  fontWeight: "bold",
                }}
              >
                פרטי תשלום
              </h3>
              <input
                type="number"
                name="in1"
                id="in1"
                placeholder=" מספר הטלפון "
              />
              <input type="text" name="in2" id="in2" placeholder=" תשם מלא " />
              <input
                type="text"
                name="in3"
                id="in3"
                placeholder=" תעודת זהות "
              />
              <input type name="in4" id="in4" placeholder=" מספר כרטיס " />
              <div className="row">
                <div className="col-6">
                  <input
                    type="week"
                    name="in1"
                    id="in4"
                    placeholder=" מספר הטלפון  "
                  />
                </div>
                <div className="col-6">
                  <input
                    type="month"
                    name="in1"
                    id="in4"
                    placeholder=" מספר הטלפון  "
                  />
                </div>
              </div>
              <input
                type="number"
                name="in5"
                id="in5"
                placeholder=" קוד אבטחה (CVV) "
              />
              <br />
              <br />
              <h4
                style={{
                  textAlign: "center",
                  color: "rgb(255, 5, 5)",
                  fontWeight: "bold",
                  padding: 10,
                  fontSize: 21,
                }}
              >
                {" "}
                סיכום{" "}
              </h4>
              <h4
                style={{
                  textAlign: "center",
                  color: "rgb(255, 5, 5)",
                  fontWeight: "bold",
                  padding: 10,
                  fontSize: 21,
                }}
              >
                {" "}
                6.21 דמי תשלום ₪{" "}
              </h4>
              <button id="b2"> להמשך </button>
              <br />
              <br />
              <br />
              <div className="row">
                <div className="col-12" style={{ textAlign: "center" }}>
                  <img src="https://i.ibb.co/XLXzTDK/16.png" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
