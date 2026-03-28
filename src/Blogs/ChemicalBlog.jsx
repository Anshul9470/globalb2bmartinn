import React from "react";
import { Link } from "react-router-dom";
import "./blog.css";

// Import images

const SixthBlogs = () => {
  return (
    <>
      <div
        style={{ fontStyle: "italic", lineHeight: "1.4" }}
        className="blog-container"
      >
        <h1 style={{ textAlign: "center" }} className="blog-title">
          Common Chemicals in Daily Life and Industry
        </h1>

        <div
          className="section"
          style={{ textAlign: "center" }}
          id="onion-seeds"
        >
          <Link to={"/chemicals"}>
            <img
              src="/assets/chemicalBlog1.jpg"
              alt="cleaning chemicals"
              className="section-image"
            />
          </Link>
          <h2 className="section-title">Cleaning Chemicals</h2>
          <p className="section-content" style={{ margin: "8px 0px" }}>
            {" "}
            <span className="onion-link">
              <Link to="/chemicals">
                {" "}
                <b className="onion-link">Cleaning chemicals </b>
              </Link>
            </span>
            are good products used in households, industries, and commercial
            spaces to maintain hygiene. Cleaning chemicals can be detergents,
            disinfectants, degreasers, and sanitizers. These help remove dirt,
            grime, stains, and dangerous bacteria from surfaces, thus making
            them clean and hygienic. The continuous use of cleaning chemicals
            ensures that the environment remains free from contaminants and
            pathogens that cause health problems.
          </p>
        </div>

        <div
          className="section"
          style={{ textAlign: "center" }}
          id="onion-powder"
        >
          <Link to={"/chemicals"}>
            <img
              width={250}
              height={200}
              src="/assets/chemicalBlog2.jpg"
              alt="Onion Powder"
              className="section-image"
            />
          </Link>
          <h2 className="section-title">Chemical Companies</h2>
          <p style={{ margin: "18px 0px" }}>
            <span className="onion-link">
              <Link to="/chemicals">
                {" "}
                <b className="onion-link">Chemical companies</b>
              </Link>
            </span>{" "}
            are a fundamental support in any economy in the world. They
            manufacture a range of chemical-based products from household usage
            and industrial use, which cut across and relate to everyday life,
            including pharmaceuticals, agriculture, and manufacturing among
            others, so are regulated and environmentally safeguarded by the
            chemical companies.
            <span className="onion-link">
              <Link to="/chemicals">
                <b className="onion-link"></b>
              </Link>
            </span>
          </p>
          <p className="section-content" style={{ margin: "8px 0px" }}>
            The chemical sector supports other sectors such as the
            pharmaceutical industry, agricultural sector, among many.
          </p>
        </div>

        <div
          className="section"
          style={{ textAlign: "center" }}
          id="dehydrated-onions"
        >
          <Link to={"/chemicals"}>
            <img
              src="/assets/chemicalBlog4.jpg"
              alt="Dehydrated Onions"
              className="section-image"
            />
          </Link>
          <h2 className="section-title">Industrial Chemicals </h2>
          <p className="section-content" style={{ margin: "8px 0px" }}>
            <span className="onion-link">
              <Link to="/chemicals">
                {" "}
                <b className="onion-link">Industrial chemicals</b>
              </Link>
            </span>{" "}
            are an integral part of most markets, ranging from manufacturing,
            agriculture, mining, and energy production. Industrial chemicals
            include chemicals such as acids, bases, salts, and solvents. They
            are used in the processes such as metal refining, fertilizer
            production, and manufacture of construction materials. Industrial
            chemicals are some of the things that are drastically considered
            while making stuff that we use in our daily lives, and the wrong
            handling of them is substantial to consider the safety concerns of
            the workplace.
          </p>
        </div>

        <div
          className="section"
          style={{ textAlign: "center" }}
          id="white-onion"
        >
          <Link to={"/chemicals"}>
            <img
              src="/assets/chemicalBlog3.jpg"
              alt="White Onion"
              className="section-image"
            />
          </Link>
          <h2 className="section-title">Chemical Manufacturers</h2>

          <p className="section-content" style={{ margin: "8px 0px" }}>
            Chemical manufacturing companies form the bedrock of chemical
            industries. They produce chemicals on a large scale and are bound to
            be utilized in various sectors, for example agriculture,
            pharmaceuticals, and textiles. The manufacturers used raw materials
            along with advanced technologies to produce a wide array of chemical
            products. High-value safety standards developed by the
            <span className="onion-link">
              <Link to="/chemicals">
                {" "}
                <b className="onion-link">chemical manufacturers</b>
              </Link>
            </span>{" "}
            must not allow accidents to occur and ensure that safe output is
            produced.
          </p>
        </div>

        <div className="section" style={{ textAlign: "center" }} id="red-onion">
          <Link to={"/chemicals"}>
            <img
              src="/assets/chemicalBlog6.jpg"
              alt="Red Onion"
              className="section-image"
            />
          </Link>
          <h2 className="section-title">Specialty Chemicals </h2>
          <p className="section-content" style={{ margin: "8px 0px" }}>
            <span className="onion-link">
              <Link to="/chemicals">
                {" "}
                <b className="onion-link">Specialty chemicals</b>
              </Link>
            </span>
            are high-value products, which is manufactured for a special
            application. Manufactured in small quantities, specialty chemicals
            can be custom-made for any particular application. Examples of
            specialty chemicals are additives, adhesives, fragrances, and
            cleaning agents. Specialty chemicals are applicable in many
            industries such as cosmetics, food, and agriculture, in which
            solutions are required for specific applications.
          </p>
        </div>

        <div
          className="section"
          style={{ textAlign: "center" }}
          id="health-benefits"
        >
          <Link to={"/chemicals"}>
            <img
              src="/assets/chemicalBlog7.jpg"
              alt="Health Benefits"
              className="section-image"
            />
          </Link>
          <h2 className="section-title">Chemical Companies in India</h2>
          <p className="section-content" style={{ margin: "8px 0px" }}>
            <span className="onion-link">
              <Link to="/chemicals">
                {" "}
                <b className="onion-link"> Chemical Companies in India</b>
              </Link>
            </span>{" "}
            have been rapidly moving forward and contribute majorly to the
            economy of the country. India is one of the world's biggest chemical
            manufacturers and offers an extensive list for all sectors. Chemical
            companies in India manufacture everything ranging from basic
            chemicals to complex specialty chemicals. These companies focus on
            innovation, safety, and sustainability to meet both domestic and
            international demands.
          </p>
        </div>

        <div
          className="section"
          style={{ textAlign: "center" }}
          id="storage-tips"
        >
          <Link to={"/chemicals"}>
            <img
              src="/assets/chemicalBlog5.jpg"
              alt="Storage Tips"
              className="section-image"
            />
          </Link>
          <h2 className="section-title">Chemical Equipment</h2>
          <p className="section-content" style={{ margin: "8px 0px" }}>
            {" "}
            <span className="onion-link">
              <Link to="/chemicals">
                {" "}
                <b className="onion-link">Chemical equipment </b>
              </Link>
            </span>{" "}
            is used in the manufacture, processing, and handling of chemicals.
            This includes tanks, reactors, mixers, pumps, and filtration
            systems, among others. In such cases, using proper chemical
            equipment leads to efficient and safe chemical reactions.
            Irrespective of the size of a chemical plant or a small laboratory,
            chemical equipment has to be in good control of chemical processes
            so that safety is ensured and the overall output is maximized.
          </p>
        </div>

        <div
          className="section"
          style={{ textAlign: "center" }}
          id="cooking-tips"
        >
          <Link to={"/chemicals"}>
            <img
              src="/assets/chemicalBlog8.jpg"
              alt="Cooking Tips"
              className="section-image"
            />
          </Link>
          <h2 className="section-title">Chemical Plants</h2>
          <p className="section-content" style={{ margin: "8px 0px" }}>
            <span className="onion-link">
              <Link to="/chemicals">
                {" "}
                <b className="onion-link">Chemical Plants </b>
              </Link>
            </span>{" "}
            are giant facilities where mass chemical processes take place. These
            plants are set up to manufacture chemicals in a well-defined set of
            steps, mixing, heating, cooling, and separation of substances. The
            chemical plants could manufacture all kinds of chemicals: simple
            compounds like water, complex specialty chemicals, and everything
            between. They need to be designed to be safe and efficient when
            dealing with dangerous materials.
          </p>
        </div>

        <div
          className="section"
          style={{ textAlign: "center" }}
          id="cooking-tips"
        >
          <Link to={"/chemicals"}>
            <img
              src="/assets/chemicalBlog9.jpg"
              alt="Cooking Tips"
              className="section-image"
            />
          </Link>
          <h2 className="section-title">Chemical and Industrial</h2>
          <p className="section-content" style={{ margin: "8px 0px" }}>
            <span className="onion-link">
              <Link to="/chemicals">
                {" "}
                <b className="onion-link">Chemical and industrial </b>
              </Link>
            </span>
            sectors are interdependent on each other. Chemicals have a prominent
            application in the industrial production of several consumer goods,
            such as plastics, textiles, and metals. There are hundreds and
            thousands of industrial chemicals that play an important role in
            producing electronic devices, clothes, and many more things that
            occur in our daily life. The current link between chemical and
            industrial sectors is vital for the survival of modern economies and
            has grown to constitute the means of producing goods worldwide.
          </p>
        </div>

        <div
          className="section"
          style={{ textAlign: "center" }}
          id="cooking-tips"
        >
          <Link to={"/chemicals"}>
            <img
              src="/assets/chemicalBlog10.jpg"
              alt="Cooking Tips"
              className="section-image"
            />
          </Link>
          <h2 className="section-title">Specialized Chemicals</h2>
          <p className="section-content" style={{ margin: "8px 0px" }}>
            {" "}
            Such{" "}
            <span className="onion-link">
              <Link to="/chemicals">
                {" "}
                <b className="onion-link">Specialized Chemicals</b>
              </Link>
            </span>
            are formulated to suit specific purposes. Often they are used by
            research and development or by niche industries with special needs
            for formulation. For instance, one could cite the biotechnological
            application, pharmaceutical research, or aerospace engineering.
            Since these chemicals apply to the newest technologies, producing
            specialized chemicals thus requires great expertise coupled with
            up-to-date equipment.
          </p>
        </div>

        <div
          className="section"
          style={{ textAlign: "center" }}
          id="cooking-tips"
        >
          <Link to={"/chemicals"}>
            <img
              src="/assets/chemicalBlog11.jpg"
              alt="Cooking Tips"
              className="section-image"
            />
          </Link>
          <h2 className="section-title">All About Chemicals</h2>
          <p className="section-content" style={{ margin: "8px 0px" }}>
            Chemicals are really important not just to industries but in daily
            life as well. Chemicals are matter characterized by given properties
            and can be altered through chemical reaction. In cleaning
            substances, medicines, and food preservatives, chemicals are many.
            Knowledge about the handling and use of chemicals for protection is
            essential for the human health and environment. The chemical
            industry is dynamic due to scientific discovery and innovation.
          </p>
        </div>

        <div
          className="section"
          style={{ textAlign: "center" }}
          id="cooking-tips"
        >
          <Link to={"/chemicals"}>
            <img
              width={300}
              height={250}
              src="/assets/chemicalBlog12.jpg"
              alt="Cooking Tips"
              className="section-image"
            />
          </Link>
          <h2 className="section-title">Chemicals India</h2>
          <p className="section-content" style={{ margin: "8px 0px" }}>
            {" "}
            The{" "}
            <span className="onion-link">
              <Link to="/chemicals">
                {" "}
                <b className="onion-link">chemicals industry in India </b>
              </Link>
            </span>
            is booming with exporting as well as producing a wide range of
            chemicals for the domestic and international markets. The range of
            chemicals manufactured in India varies from basic industrial
            chemicals to high-end specialty chemicals. Working towards a
            sustainable future and innovation, chemicals in India are now being
            used in agriculture, healthcare, construction, and much more. India
            is increasingly becoming the global hub for chemical production.
          </p>
        </div>

        <div
          className="section"
          style={{ textAlign: "center" }}
          id="cooking-tips"
        >
          <Link to={"/chemicals"}>
            <img
              width={300}
              height={150}
              src="/assets/chemicalBlog13.jpg"
              alt="Cooking Tips"
              className="section-image"
            />
          </Link>
          <h2 className="section-title">Cleaning and Chemicals</h2>
          <p className="section-content" style={{ margin: "8px 0px" }}>
            <span className="onion-link">
              <Link to="/chemicals">
                {" "}
                <b className="onion-link">Cleaning and Chemicals </b>
              </Link>
            </span>
            go hand in hand. The cleaning industry relies heavily on an
            extensive range of chemical-based products, from detergents to
            sanitizers, which build the basis for hygiene and cleanliness in
            homes, offices, hospitals, and industrial sites. When used
            correctly, cleaning agents disinfect surfaces, thus preventing
            infections and improving health and safety.
          </p>
        </div>

        <div
          className="section"
          style={{ textAlign: "center" }}
          id="cooking-tips"
        >
          <Link to={"/chemicals"}>
            <img
              width={300}
              height={150}
              src="/assets/chemicalBlog14.jpg"
              alt="Cooking Tips"
              className="section-image"
            />
          </Link>
          <h2 className="section-title">Indian Chemical Industries</h2>
          <p className="section-content" style={{ margin: "8px 0px" }}>
            <span className="onion-link">
              <Link to="/chemicals">
                {" "}
                <b className="onion-link">Indian Chemical Industries</b>
              </Link>
            </span>
            form a significant economic growth contribution to the nation.
            Chemicals in India, with newer advanced technologies, have developed
            to become one of the largest industries around the globe. The
            industry of Indian chemicals is involved in producing various
            products such as fertilizers, pharmaceuticals, and petrochemicals.
            India's chemical industries are also focusing on sustainable
            practices so as to reduce environmental impact.
          </p>
        </div>

        <div
          className="section"
          style={{ textAlign: "center" }}
          id="cooking-tips"
        >
          <Link to={"/chemicals"}>
            <img
              width={300}
              height={150}
              src="/assets/chemicalBlog15.jpg"
              alt="Cooking Tips"
              className="section-image"
            />
          </Link>
          <h2 className="section-title">Chemical Plantation</h2>
          <p className="section-content" style={{ margin: "25px 0px" }}>
            <span className="onion-link">
              <Link to="/chemicals">
                {" "}
                <b className="onion-link">Chemical Plantation</b>
              </Link>
            </span>
            ,or the use of chemicals in agricultural practices, is a common
            thing nowadays with chemical fertilizers and pesticides in modern
            farming to facilitate better growth of crops and prevent pests and
            diseases. Chemical plantations have become an important factor
            towards food security due to their ability to improve crop yields.
            However, this must be done responsibly to avoid health and
            environmental hazards.
          </p>
          <p className="section-content" style={{ margin: "8px 0px" }}>
            The chemicals industry, as a whole, has become a significant
            constituent of our daily existence. While you clean up the toilet or
            put war paints in military machinery, you find chemicals to be a
            vital ingredient in enhancing life's quality. And thus, with the
            industry still making ways and maneuvering towards new frontiers,
            stay well-informed about what types of chemicals we are on and how
            they interact with us.
          </p>
        </div>
        <Link to={"/celebrate-artistry"}>
          <button class="next-btn">Next</button>
        </Link>
      </div>
    </>
  );
};

export default SixthBlogs;
