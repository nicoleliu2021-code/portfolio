# CRO Case Study: Behavioral Segmentation Driving +53% Downstream Conversion Lift

---

## Snapshot

**Funnel Stage:** Early-stage product selection
**Traffic Type:** High-intent refinance / home equity decision flow
**Primary Goal:** Increase folder completions by improving product-path relevance

---

## Problem

Users entering the refinance funnel were not clearly guided between refinance and home equity loan options. Many defaulted into the wrong product path based on their actual needs, leading to drop-off and misaligned expectations downstream.

The existing flow treated all refinance traffic as homogeneous, missing an opportunity to segment users by their financial situation and guide them toward the most relevant product.

---

## Hypothesis

**If** we introduce a segmentation step asking for the user's current mortgage interest rate and use that signal to guide them toward the most suitable product,
**Then** we can improve relevance and downstream conversion
**Because** users will gain decision clarity early, reducing friction and increasing confidence in the path they choose.

---

## Experiment Design

Introduced a qualifying question immediately after loan purpose selection:

> "What is your current mortgage interest rate?"

Based on the user's response, the experience dynamically framed the recommendation toward either refinance (for higher rates) or home equity (for lower rates), ensuring users entered the path most aligned with their financial context.

- **Control:** Standard flow with no segmentation step
- **Variant:** Segmentation question with tailored product recommendation
- **Sample Size:** 49,827 total visitors (26,346 control / 23,481 variant)
- **Duration:** Full statistical significance reached

---

## Results

| Metric | Control | Variant | Lift |
|--------|---------|---------|------|
| **Visitors** | 26,346 | 23,481 | - |
| **Leads** | 2,514 | 2,433 | **+8.6%** |
| **Chat Transferred** | - | - | **+16.4%** |
| **Folders (Applications)** | - | - | **+53.1%** |

The variant showed progressively stronger lift as users moved deeper into the funnel, indicating improved product-market fit and reduced abandonment.

---

## Key Learning

**Decision clarity and smart segmentation outperform generic product flows.**

By asking one high-signal question early in the funnel, we were able to:
- Reduce cognitive load for users unsure of which product to choose
- Increase relevance of downstream messaging and CTAs
- Build trust by demonstrating that the experience was tailored to their specific situation

The lift compounded as users progressed, with the strongest gains appearing at the folder (application) stage — the point where product-path misalignment would have historically caused the most friction.

---

## Why It Matters

This experiment demonstrates that **segmentation is not just a targeting strategy — it's a conversion lever.**

Most optimization efforts focus on headlines, CTAs, or visual treatments. This test shows that improving the logic of the experience itself — how users are guided through decision points — can deliver step-change improvements in downstream outcomes.

For high-consideration purchases, clarity beats persuasion.

---

**Operator Takeaway:**
One well-placed question can unlock double-digit conversion lifts if it reduces uncertainty at a critical decision point. Segmentation belongs in the funnel, not just the targeting layer.
