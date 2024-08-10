import React, { useEffect, useState } from "react";
import "./stepper.css";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";

const Stepper = () => {
  const [step, setStep] = useState(0);
  const [rot, setRotation] = useState(0);
  const [gaseChart, setGuageChart] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (gaseChart > 90) {
        setGuageChart(0);
      } else {
        setGuageChart(gaseChart + 1);
      }
    }, 60);
  });

  return (
    <div className="main-display">
      <div className="box-container">
        <div className="main-circle">
          <Gauge
            width={340}
            height={340}
            startAngle={360}
            endAngle={180}
            value={gaseChart}
            innerRadius={105}
            outerRadius={125}
            sx={(theme) => ({
              position: "absolute",
              right: "5%",
              top: "-35%",

              [`& .${gaugeClasses.valueText}`]: {
                fontSize: 0,
                opacity: 0,
              },
              [`& .${gaugeClasses.valueArc}`]: {
                fill: "#dedede",
              },
              [`& .${gaugeClasses.referenceArc}`]: {
                fill: "white",
                opacity: 0,
              },
            })}
          />
          <div
            className="triangle-shape-tile"
            style={{ transform: `rotate(270deg)` }}></div>
          <div
            className="triangle-shape"
            style={{ transform: `rotate(${rot}deg)` }}></div>
          {/* first */}
          <div className="first-line">
            <div className="first-text-con">
              <p
                style={{
                  color: "teal",
                  fontSize: 11,
                  fontWeight: 500,
                  margin: 0,
                }}>
                START
              </p>
              <p
                style={{
                  color: "teal",
                  fontSize: 9,
                  margin: 0,
                }}>
                111 aa
              </p>
            </div>
          </div>
          {/* top 0 */}
          <div
            style={{
              position: "absolute",
              top: -45,
              left: "46.5%",
              backgroundColor: step === 0 ? "green" : "black",
              borderRadius: 50,
              padding: 2,
              width: 12,
              height: 12,
            }}>
            <p
              style={{
                color: "white",
                margin: 0,
                lineHeight: 1,
                fontSize: 11,
              }}>
              0
            </p>
          </div>
          {/* end */}
          <div className="end-line">
            <div className="end-text-con">
              <p
                style={{
                  color: "teal",
                  fontSize: 11,
                  fontWeight: 500,
                  margin: 0,
                }}>
                UNIT END
              </p>
              <p
                style={{
                  color: "teal",
                  fontSize: 9,
                  margin: 0,
                }}>
                10 aa
              </p>
            </div>
          </div>
          {/* end 3 */}
          <div
            style={{
              position: "absolute",
              bottom: -45,
              right: "46.5%",
              backgroundColor: step === 3 ? "green" : "black",
              borderRadius: 50,
              padding: 2,
              width: 12,
              height: 12,
            }}>
            <p
              style={{
                color: "white",
                margin: 0,
                lineHeight: 1,
                fontSize: 11,
              }}>
              3
            </p>
          </div>
          {/* line 1 */}
          <div
            style={{
              backgroundColor: "teal",
              height: 30,
              width: 2,
              position: "absolute",
              right: 0,
              top: 25,
              rotate: "45deg",
            }}></div>
          {/* right 1 */}
          <div
            style={{
              position: "absolute",
              top: 10,
              right: "-46%",
              display: "flex",
              gap: 5,
              alignItems: "center",
              textAlign: "start",
            }}>
            <div
              style={{
                backgroundColor: step === 1 ? "green" : "black",
                borderRadius: 50,
                padding: 2,
                width: 12,
                height: 12,
                textAlign: "center",
              }}>
              <p
                style={{
                  color: "white",
                  margin: 0,
                  lineHeight: 1,
                  fontSize: 11,
                }}>
                1
              </p>
            </div>
            <div className="">
              <p
                style={{
                  color: "teal",
                  fontSize: 11,
                  fontWeight: 500,
                  margin: 0,
                }}>
                UNIT START
              </p>
              <p
                style={{
                  color: "teal",
                  fontSize: 9,
                  margin: 0,
                }}>
                80 aa
              </p>
            </div>
          </div>
          {/* line 2 */}
          <div
            style={{
              backgroundColor: "teal",
              height: 30,
              width: 2,
              position: "absolute",
              right: 0,
              bottom: 25,
              rotate: "125deg",
            }}></div>
          {/* right 2 */}
          <div
            style={{
              position: "absolute",
              bottom: -5,
              right: "-54%",
              display: "flex",
              gap: 5,
              textAlign: "start",
            }}>
            <div
              style={{
                backgroundColor: step === 2 ? "green" : "black",
                borderRadius: 50,
                padding: 2,
                width: 12,
                height: 12,
                textAlign: "center",
              }}>
              <p
                style={{
                  color: "white",
                  margin: 0,
                  lineHeight: 1,
                  fontSize: 11,
                }}>
                2
              </p>
            </div>
            <div className="">
              <p
                style={{
                  color: "teal",
                  fontSize: 9,
                  margin: 0,
                }}>
                20 aa
              </p>
              <div className="box-text">
                <p
                  style={{
                    color: "teal",
                    fontSize: 11,
                    fontWeight: 500,
                    margin: 0,
                  }}>
                  PROPERTY
                </p>
              </div>
            </div>
          </div>
          {/* loading */}
          <div style={{ position: "absolute", top: 25, left: -70 }}>
            <p style={{ color: "gray", fontSize: 12 }}>LOADING</p>
          </div>
        </div>

        <div className="mini-circle">
          <p className="actual">ACTUAL</p>
          <div className="text-div">
            <p className="main-text " style={{ color: "teal" }}>
              111
            </p>
            <p className="sub-text" style={{ color: "teal" }}>
              aa
            </p>
          </div>

          <div className="text-div">
            <p className="main-text">1000</p>
            <p className="sub-text">aa/bbb</p>
          </div>

          <div className="text-div">
            <p className="main-text">24</p>
            <p className="sub-text">cc</p>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", gap: 10 }}>
        <button
          disabled={step === 0}
          onClick={() => {
            setStep(step - 1);
            setRotation(rot - 60);
          }}>
          prev
        </button>
        <button
          disabled={step === 3}
          onClick={() => {
            setStep(step + 1);
            setRotation(rot + 60);
          }}>
          next
        </button>
      </div>
    </div>
  );
};

export default Stepper;
