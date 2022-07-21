import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// import styles from "../styles/Home.module.css";
import Header from "../components/header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Crossroads Youth and Family Counselling</title>
      </Head>

      <Header />
     
      <div
        className="hero"
        style={{
          backgroundImage: 'url(/pictures/homepage.jpg)',
          backgroundSize: 'contain'
        }}
      >
        <div className="hero-inner">
          <div className="inner">
            <h1>
              <span className="border border-top border-bottom">
                Crossroads
              </span>
            </h1>{" "}
            <div className="hero-line-one">Youth and Family Counselling</div>{" "}
          </div>

          <a className="more-arrow" href="#content">
            <i className="fa fa-chevron-down"></i>
            <span>Scroll Down</span>
          </a>
        </div>
      </div>
      <div className="home-sticky" id="content">
        <div className="post-content homepage-content">
          <p>
            Crossroads provides therapy services to individuals, couples,
            co-parents and families.
          </p>
          <p>
            We empower clients to find hope and enjoyment in themselves and
            their relationships.
          </p>
          <p>
            We specialise in relationship conflict, family breakdown and youth
            mental health.
          </p>
        </div>

        <div className="sticky-inner">
          <aside
            className="home-sticky-post post-124 post type-post status-publish format-standard has-post-thumbnail sticky hentry category-young-people"
            id="post-124"
          >
            <span className="post-image">
              <a
                href="http://www.crossroadscounsellingsydney.com.au/young-people/"
                title="Young People"
              >
                <img
                  width="702"
                  height="468"
                  src="http://www.crossroadscounsellingsydney.com.au/wp-content/uploads/2014/12/young_people.jpg"
                  className="attachment-sticky wp-post-image"
                  alt="Counselling and therapy for adolescents and youth"
                  title=""
                />
              </a>
            </span>

            <div className="inner">
              <h3 className="post-title entry-title">
                <a
                  href="http://www.crossroadscounsellingsydney.com.au/young-people/"
                  title="Young People"
                >
                  Young People
                </a>
              </h3>

              
            </div>
          </aside>
          <aside
            className="home-sticky-post post-126 post type-post status-publish format-standard has-post-thumbnail sticky hentry category-adults"
            id="post-126"
          >
            <span className="post-image">
              <a
                href="http://www.crossroadscounsellingsydney.com.au/adults/"
                title="Adults"
              >
                <img
                  width="702"
                  height="468"
                  src="http://www.crossroadscounsellingsydney.com.au/wp-content/uploads/2014/12/adults.jpg"
                  className="attachment-sticky wp-post-image"
                  alt="Crossroads counselling adults men couples parents"
                  title=""
                />
              </a>
            </span>

            <div className="inner">
              <h3 className="post-title entry-title">
                <a
                  href="http://www.crossroadscounsellingsydney.com.au/adults/"
                  title="Adults"
                >
                  Adults
                </a>
              </h3>

              
            </div>
          </aside>
          <aside
            className="home-sticky-post post-128 post type-post status-publish format-standard has-post-thumbnail sticky hentry category-families"
            id="post-128"
          >
            <span className="post-image">
              <a
                href="http://www.crossroadscounsellingsydney.com.au/families/"
                title="Families"
              >
                <img
                  width="702"
                  height="468"
                  src="http://www.crossroadscounsellingsydney.com.au/wp-content/uploads/2014/12/families.jpg"
                  className="attachment-sticky wp-post-image"
                  alt="Crossroads family counselling and therapy"
                  title=""
                />
              </a>
            </span>

            <div className="inner">
              <h3 className="post-title entry-title">
                <a
                  href="http://www.crossroadscounsellingsydney.com.au/families/"
                  title="Families"
                >
                  Families
                </a>
              </h3>

            </div>
          </aside>
        </div>
      </div>


      <div className="wrap full-wrap">
        <div className="main-wrap">
          <section className="main main-archive">
            <div className="loop"></div>
          </section>
        </div>
      </div>

      <div className="footer-widgets widget-count-1">
        <div className="wrap">
          <div className="widget footer">
            <h4>TO FIND OUT MORE CALL</h4>{" "}
            <div className="textwidget">0413 911 639</div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-wrap">
          <div id="footer-text">
            © 2022 Crossroads Youth and Family Counselling
          </div>

          <a href="#top" id="btt">
            Top <i className="fa fa-chevron-up"></i>
          </a>
        </div>
      </footer>

    </>
  );
}