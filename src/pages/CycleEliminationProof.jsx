import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";

// Styles
import StyledHome from "../styles/pages/Home";

//Mathjax
import { MathJax, MathJaxContext } from "better-react-mathjax";

// Material UI
import { Button, IconButton } from "@mui/material";

// Icons
import * as MuiIcons from "@mui/icons-material";

const Math = (props) => {
  return <MathJax inline={true}>{props.eq}</MathJax>;
};


const Home = (props) => {
  const history = useNavigate();
  document.title = "Why does Cycle Elimination Work?";

  const sectionRef = useRef(null);

  return (
    <StyledHome>
      <section className="top-section transparent-background">
        <h1>Why does Cycle Elimination Work?</h1>
        <IconButton
          onClick={() =>
            sectionRef.current?.scrollIntoView({ behaviour: "smooth" })
          }
        >
          <MuiIcons.KeyboardArrowDownRounded />
        </IconButton>
      </section>

      <section className="text-section responsive" ref={sectionRef}>
      <MathJaxContext>
        <h1>Cycle Elimination Algorithm Proof</h1>

        <p>
          Cycle Elimination Algorithm is a fair division algorithm that outputs
          an EF1 Allocation in polynomial time complexity.
        </p>

        <h2>Proof</h2>
        <p>
          {/* The algorithm is as follows:
          <ol>
            <li>Fix ordering of the goods.</li>
            <li>While <Math eq={"\\(\\exists \\)"}/> unallocated goods:</li>
            <ol>
              <li>
                 An agent <Math eq={"\\(a_i \\)"}/> will choose a good with maximum valuation (according to him) from the available goods, say this good is <Math eq={"\\(g_j \\)"}/>.
              </li>
              <li>
                Finally, <Math eq={"\\(A_i  = A_i \\cup \\; \\{g_j\\}\\)"}/>, where <Math eq={"\\(A_i \\)"}/> is the set of goods allocated to agent <Math eq={"\\(a_i \\)"}/>.
              </li>
            </ol>
        </ol> */}
          <b>Intuition and Proof</b>:
            <ol>
                <li> At every stage, we allocate good to that agent who no one envies. Therefore, if we take away that good, then no one would envy that particular agent. Therefore, it is EF1 at every stage.</li>
                <li>If no such agent exists, then there exists an envy cycle. This follows from the following theorem in graph theory, "If there doesn't exist a node with indegree 0 in a directed graph, then there must exist a cycle in the directed graph".
                    <hr></hr>
                    This can be proven pretty easily. Since there doesn't exist a node with indegree 0, then all nodes have indegree greater than or equal to 1. Pick any node, since its indegree is at least 1, we can travel to its parent node. By similar argument, this node also has indegree greater than or equal to 1. So we can keep doing this procedure until we arrive at the node we already visited. This proves that there exists a cycle in directed graph.
                    <hr></hr></li>
                    <li>In such case, we rotate bundles, among the agents in cycle. Every agent gets a bundle better than it previously had, therefore the number of outgoing edges from the agents in a cycle reduces. Moreover, no new envies are formed as the bundles remain the same, only owners are changed.</li>
                <li>Therefore, we can conclude number of edges keep decreasing after every rotation in a cycle and also no new edges appear. Hence, it terminates and we can find an agent who no one envies after this.</li>
            </ol>

            {/* <b>Mathematical Proof</b>:
            <hr></hr>
            <br></br>
            Given a set of agents <Math eq={"\\( N = \\{ a_1, a_2, \\dots, a_n \\; \\} \\)"}/>, set of goods <Math eq={"\\( M = \\{ g_1, g_2, \\dots, g_m \\; \\} \\)"}/> and set of allocations <Math eq={"\\( A = \\{ A_1, A_2, \\dots, A_n \\; \\} \\)"}/>.<br></br><br></br>
            Consider any two arbitrary agents, <Math eq={"\\( a_i, a_j \\in N\\)"}/>.<br></br> 
            If agent <Math eq={"\\( a_i\\)"}/> appears before <Math eq={"\\( a_j \\)"}/>, then in any round <Math eq={"\\[ v_i(g_i) \\geq v_i(g_j) \\]"}/> where <Math eq={"\\( g_i, g_j \\in M\\)"}/> are the goods chosen by <Math eq={"\\( a_i, a_j\\)"}/> respectively in that round.
            <br></br>
            <br></br>
            Hence, <Math eq={"\\[ \\sum \\limits_{rounds} v_i(g_i) \\geq v_i(g_j)\\]"}/>. By the property of additivity, we can write, <Math eq={"\\( \\sum \\limits_{rounds} v_i(g_i) = v_i(A_i)\\)"}/> and <Math eq={"\\( \\sum \\limits_{rounds} v_i(g_j) = v_i(A_j)\\)"}/>. Using this in above equation, we get,
            <Math eq={"\\[ v_i(A_i) \\geq v_i(A_j)\\]"}/>
            i.e, agent <Math eq={"\\( a_i\\)"}/> does not envy agent <Math eq={"\\( a_j\\)"}/>, provided agent <Math eq={"\\( a_i\\)"}/> appears before agent <Math eq={"\\( a_j\\)"}/> in the ordering.

            <br></br>
            <br></br>

            <b>But</b>, if agent <Math eq={"\\( a_i\\)"}/> appears after <Math eq={"\\( a_j \\)"}/>, then we can write <Math eq={"\\[ v_i(g_i) \\geq v_i(g_j) \\]"}/> where <Math eq={"\\( g_i \\in M\\)"}/> is the good chosen by <Math eq={"\\( a_i\\)"}/> in a particular round and <Math eq={"\\( g_j \\in M\\)"}/> is the good chosen by <Math eq={"\\( a_j\\)"}/> in the next round.

            Now taking summation on both sides, <Math eq={"\\[ \\sum \\limits_{rounds} v_i(g_i) \\geq v_i(g_j)\\]"}/> Also, again by property of additivity we can write <Math eq={"\\( \\sum \\limits_{rounds} v_i(g_i) = v_i(A_i)\\)"}/> and <Math eq={"\\( \\sum \\limits_{rounds} v_i(g_j) = v_i(A_j \\backslash \\; \\{ g \\; \\})\\)"}/> where <Math eq={"\\( g \\)"}/> is the good chosen by agent <Math eq={"\\(a_j\\)"}/> in the first round.
            <br></br>
            <br></br>
            Finally, we can write, <Math eq={"\\[ v_i(A_i) \\geq v_i(A_j \\backslash \\; \\{ g \\; \\} )\\]"}/>which is the definition of EF1 Allocation.
            <br></br>
            <br></br>
            <hr></hr>
            <b>Note:</b> Round Robin Algorithm works only for positive valuations.  */}
        </p>

        

        <a
          className="center-button"
          href="https://yatharth811.github.io/GraphVisualizer/cycle-elimination-visualize.html"
          target="_blank"
          onClick={(e) => e.stopPropagation()}
        >
          <Button color="success" variant="contained" size="large">
            Visualize
          </Button>
        </a>
      </MathJaxContext>
      </section>
    </StyledHome>
  );
};

export default Home;
