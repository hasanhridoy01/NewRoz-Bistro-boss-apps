import { Container, Divider, Rating, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import "./Testimonials.css";

function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  return (
    <div style={{ marginBottom: "100px" }}>
      <div
        className=""
        style={{ margin: "auto", marginTop: "100px", marginBottom: "0px" }}
      >
        <Stack rowGap={2}>
          <Typography sx={{ textAlign: "center", color: "gold" }}>
            ---What Our Clients Say---
          </Typography>
          <div
            className=""
            style={{ height: "100px", width: "400px", margin: "auto" }}
          >
            <Divider />
            <Typography
              sx={{
                textAlign: "center",
                marginTop: "10px",
                marginBottom: "10px",
              }}
              variant="h5"
            >
              TESTIMONIALS
            </Typography>
            <Divider />
          </div>
        </Stack>
      </div>
      <Container>
        <div className="navigation-wrapper">
          <div ref={sliderRef} className="keen-slider">
            <div
              className="keen-slider__slide number-slide1"
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "13px",
                background: "none",
              }}
            >
              <Rating
                name="size-large"
                defaultValue={2}
                size="large"
                sx={{ marginBottom: "10px" }}
              />
              <Typography
                variant="body2"
                sx={{
                  width: { xs: "100%", md: "700px" },
                  maxWidth: { xs: "340px", md: "700px" },
                  textAlign: "center",
                  color: "#000",
                }}
              >
                Various version have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </Typography>
              <Typography variant="h6" sx={{ color: "#000" }}>
                JANE DOE
              </Typography>
            </div>
            <div
              className="keen-slider__slide number-slide2"
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "13px",
                background: "none",
              }}
            >
              <Rating
                name="size-large"
                defaultValue={2}
                size="large"
                sx={{ marginBottom: "10px" }}
              />
              <Typography
                variant="body2"
                sx={{
                  width: { xs: "100%", md: "700px" },
                  maxWidth: { xs: "340px", md: "700px" },
                  textAlign: "center",
                  color: "#000",
                }}
              >
                Various version have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </Typography>
              <Typography variant="h6" sx={{ color: "#000" }}>
                JANE DOE
              </Typography>
            </div>
            <div
              className="keen-slider__slide number-slide3"
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "13px",
                background: "none",
              }}
            >
              <Rating
                name="size-large"
                defaultValue={2}
                size="large"
                sx={{ marginBottom: "10px" }}
              />
              <Typography
                variant="body2"
                sx={{
                  width: { xs: "100%", md: "700px" },
                  maxWidth: { xs: "340px", md: "700px" },
                  textAlign: "center",
                  color: "#000",
                }}
              >
                Various version have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </Typography>
              <Typography variant="h6" sx={{ color: "#000" }}>
                JANE DOE
              </Typography>
            </div>
            <div
              className="keen-slider__slide number-slide4"
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "13px",
                background: "none",
              }}
            >
              <Rating
                name="size-large"
                defaultValue={3}
                size="large"
                sx={{ marginBottom: "10px" }}
              />
              <Typography
                variant="body2"
                sx={{
                  width: { xs: "100%", md: "700px" },
                  maxWidth: { xs: "340px", md: "700px" },
                  textAlign: "center",
                  color: "#000",
                }}
              >
                Various version have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </Typography>
              <Typography variant="h6" sx={{ color: "#000" }}>
                JANE DOE
              </Typography>
            </div>
            <div
              className="keen-slider__slide number-slide5"
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "13px",
                background: "none",
              }}
            >
              <Rating
                name="size-large"
                defaultValue={4}
                size="large"
                sx={{ marginBottom: "10px" }}
              />
              <Typography
                variant="body2"
                sx={{
                  width: { xs: "100%", md: "700px" },
                  maxWidth: { xs: "340px", md: "700px" },
                  textAlign: "center",
                  color: "#000",
                }}
              >
                Various version have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </Typography>
              <Typography variant="h6" sx={{ color: "#000" }}>
                JANE DOE
              </Typography>
            </div>
            <div
              className="keen-slider__slide number-slide6"
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "13px",
                background: "none",
              }}
            >
              <Rating
                name="size-large"
                defaultValue={1}
                size="large"
                sx={{ marginBottom: "10px" }}
              />
              <Typography
                variant="body2"
                sx={{
                  width: { xs: "100%", md: "700px" },
                  maxWidth: { xs: "340px", md: "700px" },
                  textAlign: "center",
                  color: "#000",
                }}
              >
                Various version have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </Typography>
              <Typography variant="h6" sx={{ color: "#000" }}>
                JANE DOE
              </Typography>
            </div>
          </div>
          {loaded && instanceRef.current && (
            <>
              <Arrow
                left
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />

              <Arrow
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              />
            </>
          )}
        </div>
        {loaded && instanceRef.current && (
          <div className="dots">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={"dot" + (currentSlide === idx ? " active" : "")}
                ></button>
              );
            })}
          </div>
        )}
      </Container>
    </div>
  );
};

export default Testimonials;
