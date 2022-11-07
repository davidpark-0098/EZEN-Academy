import React from "react";
import styled from "styled-components";

import mq from "../MediaQuery";

const FooterContainer = styled.footer`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px 8px 16px;
  box-sizing: border-box;

  section {
    display: flex;
    padding: 32px 8px;

    ${mq.maxWidth('sm')`
    flex-direction: column;
    `}
    article {
      width: 33.3%;
      padding: 0 8px;
      box-sizing: border-box;

      h1 {
        display: inline-block;
        margin: 10px 0;
      }
    }

    #footer {
      p {
        line-height: 20px;
      }

      span {
        display: inline-block;
        margin: 15px 0;

        a {
          text-decoration: underline;
          color: black;
        }
      }
    }

    #blog_posts {
      ul {
        hr {
          margin: 0;
          border: 0;
          border-top: 1px solid #eee;
        }
        li {
          width: 100%;
          padding: 16px;
          box-sizing: border-box;
          display: flex;

          img {
            width: 50px;
            height: 50px;
            margin: 0 16px 0 0;
          }

          span {
            display: flex;
            flex-direction: column;
          }

          .post_title {
            font-size: 18px;
            margin-bottom: 8px;
          }

          .post_text {
            font-size: 15px;
          }
        }
      }
      span {
        display: inline-block;
      }
    }

    #popular_tags {
      article {
        width: 100%;
        margin: 15px 0;
        box-sizing: border-box;
        font-family: serif;
        span {
          display: inline-block;
          background-color: #616161;
          padding: 0 8px;
          margin-bottom: 16px;
          text-align: center;
          line-height: 1.5;
          font-size: 12px;
          color: white;
          margin-right: 5px;
        }
        #select {
          padding: 1px 5px;
          box-sizing: border-box;
          background-color: black;
          color: white;
        }
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <section>
        <article id="footer">
          <h1>FOOTER</h1>
          <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
          <span>
            Powered by <a href="https://www.w3schools.com/w3css/default.asp">w3.css</a>
          </span>
        </article>
        <article id="blog_posts">
          <h1>BLOG POSTS</h1>
          <ul id="blog_post">
            <li class="blog_post">
              <img src="https://www.w3schools.com/w3images/workshop.jpg" alt="Lorem" />
              <div>
                <span class="post_title">Lorem</span>
                <span class="post_text">Sed mattis nunc</span>
              </div>
            </li>
            <hr />
            <li class="blog_post">
              <img src="https://www.w3schools.com/w3images/gondol.jpg" alt="Ipsum" />
              <div>
                <span class="post_title">Ipsum</span>
                <sapn class="post_text">Praes tinci sed</sapn>
              </div>
            </li>
          </ul>
        </article>
        <article id="popular_tags">
          <h1>POPULAR TAGS</h1>
          <article>
            <span id="select" class="poppular_tag">
              Travel
            </span>
            <span class="poppular_tag">New York</span>
            <span class="poppular_tag">Kinner</span>
            <span class="poppular_tag">Salmon</span>
            <span class="poppular_tag">France</span>
            <span class="poppular_tag">Drinks</span>
            <span class="poppular_tag">Ideas</span>
            <span class="poppular_tag">Flavors</span>
            <span class="poppular_tag">Cuisine</span>
            <span class="poppular_tag">Chicken</span>
            <span class="poppular_tag">Dressing</span>
            <span class="poppular_tag">Fried</span>
            <span class="poppular_tag">Fish</span>
            <span class="poppular_tag">Duck</span>
          </article>
        </article>
      </section>
    </FooterContainer>
  );
};

export default Footer;
