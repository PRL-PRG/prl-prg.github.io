---
layout: default
title: Student projects
---

Here are some suggestions of projects from us. If you have another idea related to programming language research, and especially, targetting our main language of interests, i.e. Javascript, R, Julia or Racket, we encourage you to contact us.

## A framework for the visualization of runtime internals

_with Konrad Siek_

Working with runtimes, be it hacking on the runtime internals themselves, or
their associated byte code interpreters, often requires peering into the
machine and figuring out what its state is (and why its going boing at any
given time). Usually this is done with a debugger and developers accumulate
useful expressions and functions to look at the state of a particular runtime
structure. These structures can be convoluted, unintuitive, and definitely not
designed to be user readable. So this is messy and tedious.
The idea for this project is to create a framework for visualizing the
internals of virtual machines: the heap, operand and frame stacks, registers,
and the code vector. The framework would show the current state of the runtime
in as it is debugged in a clear and human readable fashion. 
The first runtime we would like to do this for is the GNU R interpreter and the 
Ř bytecode developed in our lab, but the goal is to implement the framework
robustly and allow for extensions to eventually make it work with other
runtimes.

**Interests:** Rust, C, C++

## Debug Adapter Protocol for the R programming language

_with Filip Křikava_

Implement support for Debug Adapter Protocol  for the R programming language. Test in VS code and vim (neovim).

**Interests:** R, Typescript, Vim

**Links:**

- [https://microsoft.github.io/debug-adapter-protocol/](https://microsoft.github.io/debug-adapter-protocol/)

## Ahead-of-time compiler for microC

_with Filip Křikava_

Implement an optimizing compiler for microC, the language used at NI-APR course.

**Interests:** compilation, program analysis

**Links:**

- [Ni-APR course](https://courses.fit.cvut.cz/NI-APR/)

## Haskell debugger for Intellij IDEA

_with Filip Křikava_

Implement a support for debugging for the Haskell plugin for Intellij IDEA.

**Interests:** Haskell, Java/Scala

**Links:**

- [Intellij plugin development](https://plugins.jetbrains.com/docs/intellij/getting-started.html)

## Extend a runtime for an agent-oriented language with transparent concurrency features

_with Konrad Siek_


The agent oriented paradigm is a lesser-known approach to computing, where a
the software system is written as a set of software agents interacting on the
state of the program.  Each agent has a set of procedures which they execute to
bring them closer to attaining some goal. The agent observes the state of the
program and fires specific procedures if the conditions to use that procedure
become met. Multiple agents share the state of the program and interact with
other agents by message passing. There are a few agent-oriented programming
languages that do this: AgentSpeak(L)/Jason, GOAL, and ASTRA.
The idea for this project involves augmenting a runtime for an agent-oriented
language with a transparent concurrency layer. Since multi-agent systems have
independently operating agents, these could be implemented with separate
threads to achieve parallelism of execution. However, since the agents touch
shared data they are susceptible to race conditions if they are implemented
with separate threads. Furthermore, since the order of execution of their
procedures is dependent on the state of the program, using classical mechanisms
like locks makes agents susceptible to deadlocks. The goal of this project is to 
construct a layer of concurrency control that would co-ordinate the execution
of procedures to remove races (and deadlocks) automatically à la transactions
or universal constructions.


**Interests:** Java (most of these languages are implemented in Java), a fearlessness of
concurrency, a love for niche technology

**Links:**

  - [http://www.sarl.io/](http://www.sarl.io/)
  - [https://goalapl.atlassian.net/wiki/](https://goalapl.atlassian.net/wiki/)
  - [https://sourceforge.net/projects/jason/](https://sourceforge.net/projects/jason/)
  - [http://astralanguage.com/wordpress/astra-user-guide/](http://astralanguage.com/wordpress/astra-user-guide/)



# Interactive Visualisation of Program Analysis Algorithms

_with Pierre Donat-Bouillud_

Visualizations have been a useful tool to help teaching algorithms.
This goal of the project is to create interactive visualizations of the program analysis algorithms presented in the NI-APR course, using a library D3.js. The course tackles Static Analysis, Symbolic Execution, and Dynamic Analysis.

It should be possible to navigate the state of an analysis depending on where it is in the analyzed program. In the case of type analysis, for instance, each statement or expression in the program could show the type constraints it adds. For symbolic execution, the statements to execute based on the worklist, the symbolic execution tree built so far, can be shown.

**Interests:** program analysis

**Links:**

- [https://algorithm-visualizer.org]( https://algorithm-visualizer.org) and [https://visualgo.net/en](https://visualgo.net/en)
- [NI-APR course](https://courses.fit.cvut.cz/NI-APR/)
- [D3.js](https://d3js.org/)

# Symbolic execution for R

_with Pierre Donat-Bouillud_

Symbolic execution is a program analysis technique that explores all the paths of a program and solve the various conditions along the paths using a SMT solver. It can create concrete examples of what leads to a particular path, what leads to some bug. 

Building a symbolic execution engine is usually along and complex endeavour. However, in "Prototyping symbolic execution engines for interpreted languages", Bucur et al. 2014, authors present a simple but powerful idea that enabled them to implement symbolic execution for Python and Lua in respectively 5 and 3 days. 

The idea is to use an existing symbolic execution engine for binary code, and to run it on the interpreter of the targeted language, e.g. the Python interpreter. It also requires to make the symbolic execution aware of the high-level CFG of the program. To get acceptable performance, the Python/Lua interpreter also has to be unoptimized!

The goal will be to use the same approach for the R language. 

**Interests:** R, symbolic execution

**Links:**

- [Prototyping symbolic execution engines for interpreted languages](https://dl.acm.org/doi/abs/10.1145/2654822.2541977)

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
    
