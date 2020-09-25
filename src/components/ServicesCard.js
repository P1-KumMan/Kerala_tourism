import React from "react";
import "./ServicesCard.css";

export const ServicesCard = () => {
  return (
    <div>
      <div className="continer">
        <div className="row">
          <div class="card">
            <div className="card-header">
              <h1>Guided Tours</h1>
            </div>
            <div className="card-body">
              <p>
                Friendly and professional Tour Guides to provide our guests with
                an exceptional experience while visiting our facility. Guide
                will be engaging visitors for the duration of the tour, sharing
                interesting facts about the history of our organization and
                answering any questions they may have.
              </p>
              <a href="./" alt="abc" class="btn">
                Read more
              </a>
            </div>
          </div>
          <div class="card">
            <div className="card-header">
              <h1>Resort</h1>
            </div>
            <div className="card-body">
              <p>
                Privacy, relaxation, and rejuvenation await you at the retreat
                that features a world-class wellness spa rooted in Kerala’s
                ancient wellness practices, large outdoor swimming pool, a
                performance deck, two gourmet restaurants offering regional and
                global cuisine, a fitness center and meeting spaces.{" "}
              </p>
              <a href="./" alt="abc" class="btn">
                Read more
              </a>
            </div>
          </div>
          <div class="card">
            <div className="card-header">
              <h1>Boat Ride</h1>
            </div>
            <div className="card-body">
              <p>
                Make the most of your time in Kerala by getting back into the
                water with this incredible private backwater Kochi shore
                excursion. Spend seven hours navigating the waterways of this
                popular southern state and get an up close look at rural
                villages and colorful wildlife on this once-in-a-lifetime
                experience.
              </p>
              <a href="./" alt="abc" class="btn">
                Read more
              </a>
            </div>
          </div>
          <div class="card">
            <div className="card-header">
              <h1>Yoga Studio</h1>
            </div>
            <div className="card-body">
              <p>
                Enjoy the peace and quite of Kerala by immersing yourself in a
                wonderful guided practice by Achu as he takes you through the
                traditional Sivanada style, by coordinating breath with movement
                and experiencing instant relaxation and contentment. One of the
                most popular studios in the area.
              </p>
              <a href="./" alt="abc" class="btn">
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
