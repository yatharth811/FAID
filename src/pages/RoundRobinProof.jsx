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
  document.title = "Why does Round Robin Algorithm Work?";

  const sectionRef = useRef(null);

  return (
    <StyledHome>
      <section className="top-section transparent-background">
        <h1>Why does Round Robin Algorithm Work?</h1>
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
        <h1>Round Robin Algorithm Proof</h1>

        <p>
          Round Robin Algorithm is a fair division algorithm that outputs
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
          <b>Intuition</b>: Consider in general any two agents, lets say these agents are Bob and Alice. We will consider two cases:
            <ol>
                <li>If Bob appears before Alice in the ordering, then Bob gets to pick good before Alice. This implies, in any round, the good chosen by Bob is as much as valuable as the good chosen by Alice. Therefore, the value of Bob's bundle is greater than or equal to the value of Alice's bundle (according to Bob) and therefore, Bob will not envy Alice.</li>
                <li>Now, if Alice appears before Bob in the ordering, then Alice gets to pick a good first. But, if we assume that Alice did not pick good in first round (just a thought experiment), then the good chosen by Bob in that round is as much as valuable as good chosen by Alice in next round. Thus, if we remove this one good from Alice's bundle, then the value of Bob's bundle is greater than or equal to value of Alice's bundle (according to Bob again). Therefore, Bob might envy Alice but envy can be removed if a single good is removed from Alice's bundle.</li>
            </ol>

            <b>Mathematical Proof</b>:
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
            <b>Note:</b> Round Robin Algorithm works only for positive valuations. 
        </p>

        

        <a
          className="center-button"
          href="https://yatharth811.github.io/Round-Robin-Algorithm/"
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
