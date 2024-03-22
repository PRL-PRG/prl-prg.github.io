---
layout: default
title: Student projects
---

Here are some suggestions of projects from us. If you have another idea related to programming language research, and especially, targetting our main language of interests, i.e. Javascript, R, Julia or Racket, we encourage you to contact us.

## Fast and robust data-analysis pipelines

**Level:** PhD

Data analysis is typically performed by composing a series of discrete tools and libraries into a data analysis pipeline. These pipelines are at the core of data-driven science that has been central to most disciplines and today see an explosion in the widespread use of computational methods and available data. As the number of tools and size of data keep growing, we face problems with the scalability of the pipelines and the trustworthiness of their results.

The goal of this work is to research ways to make data analysis pipelines scalable (accommodate growing data and computational needs) and trustworthy (facilitate auditing of the analysis result). The research will go along two axes. The first will focus on extending the R programming language with transparent horizontal and vertical scaling. The second will study a combination of static and dynamic program analysis techniques to gain insight into the nature and severity of programming errors in the code of data-analysis pipelines, and propose algorithms for their detection and possible automated repair.

## Debug Adapter Protocol for the R programming language

_with Filip Křikava_

Implement support for Debug Adapter Protocol for the R programming language. Test in VS code and vim (neovim).

**Interests:** R, Typescript, Vim

**Links:**

- [https://microsoft.github.io/debug-adapter-protocol/](https://microsoft.github.io/debug-adapter-protocol/)

## Language Server Protocol for Simple Object Machine (LSP4SOM)

with Filip Křikava

Implement a language server protocol for the Simple Object Machine (a small dialect of Smalltalk) programming language.

Interests: Programming languages, runtime systems

Links:

- [SOM](https://som-st.github.io/)
- [LSP](https://microsoft.github.io/language-server-protocol/)

## Debug Adapter Protocol for Simple Object Machine (DAP4SOM)

_with Filip Křikava_

Implement a debug adapter protocol for the Simple Object Machine (a small dialect of Smalltalk) programming language.

Interests: Programming languages, runtime systems

Links:

- [SOM](https://som-st.github.io/)
- [DAP](https://microsoft.github.io/debug-adapter-protocol/)

## Haskell debugger for Intellij IDEA

_with Filip Křikava_

Implement a support for debugging for the Haskell plugin for Intellij IDEA.

**Interests:** Haskell, Java/Scala

**Links:**

- [Intellij plugin development](https://plugins.jetbrains.com/docs/intellij/getting-started.html)

# Interactive Visualisation of Program Analysis Algorithms

_with Pierre Donat-Bouillud_

Visualizations have been a useful tool to help teaching algorithms.
This goal of the project is to create interactive visualizations of the program analysis algorithms presented in the NI-APR course, using a library D3.js. The course tackles Static Analysis, Symbolic Execution, and Dynamic Analysis.

It should be possible to navigate the state of an analysis depending on where it is in the analyzed program. In the case of type analysis, for instance, each statement or expression in the program could show the type constraints it adds. For symbolic execution, the statements to execute based on the worklist, the symbolic execution tree built so far, can be shown.

**Interests:** program analysis

**Links:**

- [https://algorithm-visualizer.org](https://algorithm-visualizer.org) and [https://visualgo.net/en](https://visualgo.net/en)
- [NI-APR course](https://courses.fit.cvut.cz/NI-APR/)
- [D3.js](https://d3js.org/)

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

## Design of a Regression Benchmark Framework

Engineer a framework for running regression benchmarks, and visualize the
results on each commit of a system. Track performance and memory footprint, as
well as other health indicators.

**Interests:** Scripting, System programming, JavaScript
