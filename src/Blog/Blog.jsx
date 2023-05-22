import React from "react";

const Blog = () => {
  return (
    <div className="mb-5" >

      <div className="border p-3 mb-3" id="pdf-element" data-aos-anchor-placement="top-bottom">
        <h3>
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </h3>
        <h4 className="mb-0 mt-4"> Refresh token:</h4>
        <p>
          <small>
            {" "}
            A refresh token just helps you re-validate a user without them
            having to re-enter their login credentials multiple times. The
            access token is re-issued, provided the refresh token is a valid one
            requesting permission to access confidential resources. This method
            provides an enhanced user experience all while keeping a robust
            security interface.
          </small>
        </p>
        <h2 className="text-3xl">
          How do they work and where should we store them on the client-side?
        </h2>
        <p>
          <small>
            There are lots of questions/answers about this topic on SO, but
            regarding the refresh token the answer are not clear. Access token
            and refresh token shouldn't be stored in the local/session storage,
            because they are not a place for any sensitive data. Hence I would
            store the access token in a httpOnly cookie (even though there is
            CSRF) and I need it for most of my requests to the Resource Server
            anyway.
          </small>
        </p>
      </div>

      <div className="border p-3 mt-3 ">
        <h3 className="text-4xl">Compare SQL and NoSQL databases?</h3>
        <h2 className="tex-2xl">
          SQL:
          <li>These databases have fixed or static or predefined schema</li>
          <li>These databases are not suited for hierarchical data storage.</li>
          <li>These databases are best suited for complex queries</li>
        </h2>
        <h2 className="tex-2xl">
          NoSQL:
          <li>Non-relational or distributed database system.</li>
          <li>They have a dynamic schema</li>
          <li>These databases are best suited for hierarchical data storage</li>
          <li>These databases are not so good for complex queries</li>
        </h2>
      </div>
      <div className="border p-3 mt-3 ">
        <h4>What is express js? What is Nest JS?</h4>
        <li>
          Express.js is a minimalistic and flexible web application framework
          for Node.js. It provides a simple and intuitive way to build web
          applications and APIs. Express.js simplifies the process of handling
          HTTP requests, routing, and implementing middleware functions. It is
          widely used in the development of server-side applications and is
          known for its simplicity and ease of use.
        </li>
        <li>
          Nest. js is one of the fastest-growing Node. js frameworks for
          building efficient, scalable, and enterprise-grade backend
          applications using Node. js.
        </li>
      </div>
      <div className="border p-3 mt-3 ">
        <h4>What is MongoDB aggregate and how does it work?</h4>
        <li>
          Aggregation is a way of processing a large number of documents in a
          collection by means of passing them through different stages. The
          stages make up what is known as a pipeline. The stages in a pipeline
          can filter, sort, group, reshape and modify documents that pass
          through the pipeline. One of the most common use cases of Aggregation
          is to calculate aggregate values for groups of documents. This is
          similar to the basic aggregation available in SQL with the GROUP BY
          clause and COUNT, SUM and AVG functions. MongoDB Aggregation goes
          further though and can also perform relational-like joins, reshape
          documents, create new and update existing collections, and so on
        </li>
        
      </div>
    </div>
  );
};

export default Blog;
