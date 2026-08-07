---
layout: default
title: Software
---

## R-universe

Most of our R packages are built and distributed through R-universe, which
provides binaries for Linux, macOS and Windows, along with build and check
status for every package. A package can be installed with:

```r
install.packages("sxpdb", repos = c("https://prl-prg.r-universe.dev",
                                    "https://cloud.r-project.org"))
```

More information at [https://prl-prg.r-universe.dev](https://prl-prg.r-universe.dev)

## Ř (previously RIR)

A back-end for R. It explores just-in-time compilation and speculative optimizations of the R language.

More information at [https://github.com/reactorlabs/rir](https://github.com/reactorlabs/rir)

## Copy-and-Patch JIT Compiler for R (rcp)

A just-in-time compiler for R based on copy-and-patch compilation. Machine-code
stencils are pre-compiled from C ahead of time, so generating native code at
runtime reduces to copying those stencils and patching in addresses, immediates
and jump targets. This makes compilation fast enough to be worth doing on code
that a heavier optimizing compiler would not pay off on.

More information at [https://github.com/PRL-PRG/rcp](https://github.com/PRL-PRG/rcp)

## crbcc

A bytecode compiler for R written in C, intended as a drop-in alternative to the
base `compiler` package. It mirrors the architecture of the GNU-R compiler and
produces compatible output, but compiles substantially faster, which matters
when large amounts of code have to be compiled repeatedly.

Available on [CRAN](https://cran.r-project.org/package=crbcc), so
`install.packages("crbcc")` is enough to get it.

More information at [https://github.com/PRL-PRG/crbcc](https://github.com/PRL-PRG/crbcc)

## R Dynamic Tracing (RDT)

A dynamic tracing framework for R. It instruments the execution of R code with custom programmable hooks.

More information at [https://github.com/PRL-PRG/R-dyntrace](https://github.com/PRL-PRG/R-dyntrace)

## sxpdb

A database to store R values.

More information at [https://github.com/PRL-PRG/sxpdb](https://github.com/PRL-PRG/sxpdb)


## Genthat

A framework for automated unit tests generation for R.

More information at [https://github.com/PRL-PRG/genthat](https://github.com/PRL-PRG/genthat)

## mutator

An automated mutation testing tool for R. It introduces small systematic changes
into the source code of a package and checks whether the test suite detects
them, which gives a measure of test quality that coverage alone does not
provide.

Available on [CRAN](https://cran.r-project.org/package=mutator), so
`install.packages("mutator")` is enough to get it.

More information at [https://github.com/PRL-PRG/mutator](https://github.com/PRL-PRG/mutator)

## contractr

Run-time type contracts for R functions. A function is annotated with a type
declaration written in the tastr type-declaration language, and contractr
injects assertions that check the arguments and the return value against that
type on every call, reporting any value that does not conform.

More information at [https://github.com/PRL-PRG/contractr](https://github.com/PRL-PRG/contractr)

## Artifact for the OOPSLA 17 DejaVu Paper

R notebooks that detail every step required for the analysis presented in the paper from data acquisition to the production of graphs showing our results.

More information at [https://github.com/PRL-PRG/dejavu-artifact](https://github.com/PRL-PRG/dejavu-artifact)
