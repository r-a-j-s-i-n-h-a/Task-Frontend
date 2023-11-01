import React from "react";
import { useState } from "react";
import "./Trello.css";
export default function Trello() {
  const [imageSrc, setImageSrc] = useState(
    "https://images.ctfassets.net/rz1oowkt5gyp/3N2U3C71rApm61cGFxnc2E/970b010002488a09a420282df5e7b43a/Carousel_Image_Boards_2x.png?w=1536&fm=webp"
  );

  const handleBoxClick = (newImageSrc) => {
    setImageSrc(newImageSrc);
  };

  return (
    <>
      <div className="head1">TRELLO 101</div>
      <div className="head2">A productivity powerhouse</div>
      <div className="para2">
        <p className="pp">
          Simple, flexible, and powerful. All it takes are boards, lists, and
          <br></br> cards to get a clear view of who’s doing what and what needs
          to
          <br></br>get done. Learn more in our{" "}
          <span>guide for getting started</span>.
        </p>
      </div>

      <div
        className="box1"
        onClick={() =>
          handleBoxClick(
            "https://images.ctfassets.net/rz1oowkt5gyp/3N2U3C71rApm61cGFxnc2E/970b010002488a09a420282df5e7b43a/Carousel_Image_Boards_2x.png?w=1536&fm=webp"
          )
        }
      >
        <h3>Boards</h3>
        <p className="ppo">
          Trello boards keep tasks organized and
          <br></br> work moving forward. In a glance, see
          <br></br> everything from “things to do” to “aww
          <br></br> yeah, we did it!”
        </p>
      </div>

      <div
        className="box1"
        onClick={() =>
          handleBoxClick(
            "https://images.ctfassets.net/rz1oowkt5gyp/4U0VUZYX2tQmB5KVGxBabp/7321ac088fe8ec39dbe3069c47d7df99/Carousel_Image_Lists_2x.png?w=1536&fm=webp"
          )
        }
      >
        <h3>Lists</h3>
        <p className="ppo">
          The different stages of a task. Start as
          <br></br> simple as To Do, Doing or Done—or build
          <br></br> a workflow custom fit to your team’s
          <br></br> needs. There’s no wrong way to Trello.
        </p>
      </div>

      <div
        className="box1"
        onClick={() =>
          handleBoxClick(
            "https://images.ctfassets.net/rz1oowkt5gyp/26CA6JZeRgoOK4nuRHnIlY/060702a80cf7c3be3651d9297d196267/Carousel_Image_Cards_2x.png?w=1536&fm=webp"
          )
        }
      >
        <h3>Lists</h3>
        <p className="ppo">
          The different stages of a task. Start as
          <br></br> simple as To Do, Doing or Done—or build
          <br></br> a workflow custom fit to your team’s
          <br></br> needs. There’s no wrong way to Trello.
        </p>
      </div>
      <div className="images">
        <img className="img1" src={imageSrc} alt="Trello Image"></img>
      </div>
    </>
  );
}
