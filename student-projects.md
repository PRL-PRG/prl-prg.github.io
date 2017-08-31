---
layout: default
title: Student projects
---

## Interpreter Design and Implementation

Design and implement an interpreter for a functional, lazy programming language
with high-level vectorized operations. The interpreter will work on a
multi-level stack-based intermediate representation called RIR.

**Interests:** low-level C++ programming

**Links:** 
- [http://trac.webkit.org/changeset/108309](http://trac.webkit.org/changeset/108309)
- [https://www.jilp.org/vol5/v5paper12.pdf](https://www.jilp.org/vol5/v5paper12.pdf)

## Super Optimization

Study how to improve the performance of the code of a language implementation,
such as an interpreter core loop, with the use of a stochastic optimizer. A
stochastic optimizer, such as STOKE, uses random search to generate extremely
efficient versions of short code snippets.

**Interests:** assembly language, language implementation

**Links:** 
- [https://github.com/StanfordPL/stoke](https://github.com/StanfordPL/stoke)

## Debugging Vectorized Code

Add support for debugging a vector language to an interpreter. This work can be
extended with integration to an IDE. Support for breakpoints and watchpoint.
    
**Interests:** C++ programming 

**Links**:
- [https://pdfs.semanticscholar.org/c239/80c56ec63ca1c3eacdbecd388df47d4c926a.pdf](https://pdfs.semanticscholar.org/c239/80c56ec63ca1c3eacdbecd388df47d4c926a.pdf)

## Record & Replay Debugging
  
Implement a debugger for the RIR interpreter that is able to record and replay
executions deterministically with minimal overhead.

**Interests:** C++ programming
    
**Links:** 
- [http://rr-project.org](http://rr-project.org)
- [http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.338.3420&rep=rep1&type=pdfAnal](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.338.3420&rep=rep1&type=pdfAnal)

## Design of a Regression Benchmark Framework
  
Engineer a framework for running regression benchmarks, and visualize the
results on each commit of a system. Track performance and memory footprint, as
well as other health indicators.

**Interests:** Scripting, System programming, JavaScript

## Semantics Specification
  
Write down the formal semantics of a subset of the R language using a
lightweight semantic specification tool such as Redex. Define the semantics of
features such as objects and lazy evaluation. Implement a test suite that
validates the correctness of the semantics.

**Interests:** programming languages

**Links:**
- [https://redex.racket-lang.org](https://redex.racket-lang.org)
- [https://link.springer.com/chapter/10.1007%2F978-3-642-31057-7_6](https://link.springer.com/chapter/10.1007%2F978-3-642-31057-7_6)
- [https://github.com/reactorlabs/core-r/blob/master/core-r.rkt](https://github.com/reactorlabs/core-r/blob/master/core-r.rkt)
    
## Executable Semantics

Starting with a semantics written in the Redex toolkit, convert that semantics
to an abstract syntax tree interpreter in the Truffle/Graal format. Evaluate the
performance of the original interpreter and the Truffle variant.

**Interests:** Java, programming language semantics

**Links:**
- [https://redex.racket-lang.org](https://redex.racket-lang.org)
- [http://cesquivias.github.io/blog/2014/12/02/writing-a-language-in-truffle-part-2-using-truffle-and-graal](http://cesquivias.github.io/blog/2014/12/02/writing-a-language-in-truffle-part-2-using-truffle-and-graal)
