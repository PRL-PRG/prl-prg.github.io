---
layout: student-projects
title: Student projects
projects:
  - name: Interpreter Design and Implementation
    description: "Design and implement an interpreter for a functional, lazy programming language with high-level vectorized operations. The interpreter will work on a multi-level stack-based intermediate representation called RIR."
    interests: low-level C++ programming
    links: 
    - http://trac.webkit.org/changeset/108309
    - https://www.jilp.org/vol5/v5paper12.pdf

  - name: Super Optimization
    description: "Study how to improve the performance of the code of a language implementation, such as an interpreter core loop, with the use of a stochastic optimizer. A stochastic optimizer, such as STOKE, uses random search to generate extremely efficient versions of short code snippets."
    interests: assembly language, language implementation
    links: 
    - https://github.com/StanfordPL/stoke

  - name: Debugging Vectorized Code
    description: "Add support for debugging a vector language to an interpreter. This work can be extended with integration to an IDE. Support for breakpoints and watchpoint."
    interests: C++ programming
    links: 
    - https://pdfs.semanticscholar.org/c239/80c56ec63ca1c3eacdbecd388df47d4c926a.pdf

  - name: Record & Replay Debugging
    description: "Implement a debugger for the RIR interpreter that is able to record and replay executions deterministically with minimal overhead."
    interests: C++ programming
    links: 
    - http://rr-project.org
    - http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.338.3420&rep=rep1&type=pdfAnal

  - name: Design of a Regression Benchmark Framework
    description: "Engineer a framework for running regression benchmarks, and visualize the results on each commit of a system. Track performance and memory footprint, as well as other health indicators."
    interests: Scripting, System programming, JavaScript

  - name: Semantics Specification
    description: "Write down the formal semantics of a subset of the R language using a lightweight semantic specification tool such as Redex. Define the semantics of features such as objects and lazy evaluation. Implement a test suite that validates the correctness of the semantics."
    interests: programming languages
    links:
    - https://redex.racket-lang.org
    - https://link.springer.com/chapter/10.1007%2F978-3-642-31057-7_6
    - https://github.com/reactorlabs/core-r/blob/master/core-r.rkt
    
  - name: Executable Semantics
    description: "Starting with a semantics written in the Redex toolkit, convert that semantics to an abstract syntax tree interpreter in the Truffle/Graal format. Evaluate the performance of the original interpreter and the Truffle variant."
    interests: Java, programming language semantics
    links:
    - https://redex.racket-lang.org
    - http://cesquivias.github.io/blog/2014/12/02/writing-a-language-in-truffle-part-2-using-truffle-and-graal
---
