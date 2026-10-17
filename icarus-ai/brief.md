# Advising Icarus on AI: the brief

*Prepared Oct 2026. Facts about Icarus come from press coverage and search snippets of icarusfc.com; the site itself didn't load directly from my research environment, so confirm current pricing and process with Robby.*

---

## 1. Icarus today (what you're walking into)

- **Who:** Icarus Football (Icarus FC), founded in 2017 by Robby Smukler, who started it in his bedroom. It now has a warehouse in Kensington, Philadelphia, plus a London office (opened around 2022).
- **What:** Original custom kits for grassroots and amateur clubs, rooted in "the culture, history and identity of the place or group" the kit is for. They also do merch, tournament kits, and one-off groups like company retreats and bachelor parties.
- **Scale (claimed):** About 300k jerseys, about 10k unique designs, and about 4,000 clients as of mid-2024. The about page says 2,000+ clubs in 25 countries. Other sources say 600+.
- **How a sale works today:**
  1. Customer fills out an **intake form** ("get designing in 5 minutes").
  2. A **human Icarus designer** reaches out.
  3. The customer gets **up to 4 free design rounds**, and design is included in the price.
  4. There's a **$50 fee if a customer previously got designs and ghosted**. That fee tells you designer time is being spent on leads that never convert.
  5. Production takes roughly **7–9 weeks** on made-to-order items.
- **Club Shops:** Each club gets a storefront on icarusfc.com (Shopify, judging by the URLs) where members and fans buy. Jerseys are around **$50**.
- **Community/brand:** The **Icarus Cup** 7v7 festival is co-run with CASA in Philly and has also run in Austin. It's heavy on soccer culture and fashion, and the brand is creative-led.

**What this means for AI:** The moat is **design taste plus identity storytelling plus community**. The bottleneck is almost certainly **designer hours per order**, especially on leads that don't convert. AI should protect the moat and attack the bottleneck.

---

## 2. What the best companies are doing

| Who | What they did | Lesson for Icarus |
|---|---|---|
| **PUMA "AI Creator" × Man City / Marseille** | A fan-facing generative kit designer: prompt in, 4 designs out, refine with sliders. Experts shortlist and fans vote, and the winner becomes a real kit. Man City got **180,000+ submissions**, and the winning fan kit was worn on the pitch. In the Marseille round, **35k users in 2 weeks** spent **8+ min/session**, made about 5 designs each, and gave about 1M ratings. People earned extra credits by rating other designs. | **This is the viral playbook.** Generation, voting, and "it gets made for real" together drive huge engagement. Icarus can run it for every club, not just one. |
| **adidas** | (a) An internal diffusion tool trained on its **entire sneaker archive**, used by its designers since 2022. (b) A consumer campaign where shoppers personalized Campus sneakers with GenAI from uploaded images. Reported results: **+12% e-commerce sales, 60% journey completion.** | (a) Icarus's **10k-design archive is a proprietary training set** that nobody else has. (b) Consumer AI personalization can measurably lift sales. |
| **Nike** | A proprietary generative model trained on athlete data. At the Paris 2024 pop-up, athletes prompted AI to design apparel in Nike's own visual language. | A model constrained to **your brand's iconography** beats a generic image model. |
| **owayo** (German custom sportswear) | Runs an "AI design service": customers make a design in any AI tool, upload it, and owayo checks printability for free and quotes. They openly note that AI designs "look impressive on screen" but don't all translate to fabric. They also have a 3D designer. | The low-effort version of the idea is already in the market. Icarus can beat it by building generation **into** the flow with production constraints applied. |
| **Spized, PUMA via Hapticmedia** | 3D configurators. Users apply colors, logos, and patterns on a 3D kit, and the system **exports a positioned SVG print file** automatically. | A 3D preview with print files generated automatically is now standard among the leaders, and it's the right base layer to put AI on. |
| **Indie generators** (Design Jersey AI, Pose AI, JerseyEngine, CubistAI, etc.) | Consumer toys that make a jersey image in seconds. Some export SVG, and some add try-on. | The demand is real (people already search for "AI jersey generator"), but none of these **manufacture**. Icarus can own the step from generated image to real kit. |

---

## 3. The opportunity map

### A. Customer-facing: "Design your kit with AI" (growth and virality)

1. **Instant concept generator on the intake form (highest priority).**
   - The customer enters club name, city/neighborhood, colors, a crest upload, and *"tell us your club's story"* (a story, myth, landmark, or inside joke).
   - An LLM turns that into an **Icarus-style design brief**, the same kind of thing their designers write mentally. Then image generation produces **3–4 concepts on a 3D kit** in under a minute.
   - The customer picks or favorites concepts and comments on them, and **that becomes the brief the human designer starts from.**
   - **Why this wins:** People get something exciting in the first minute, so fewer ghost before round 1. Designers start from a picked direction instead of a blank page. Rounds and hours per order should drop, and conversion should rise.

2. **Shareable "my club's dream kit" pages, built for virality.**
   - Every generated concept gets a public URL plus auto-made social assets: a 9:16 story image, an on-model photo, and a short reveal video.
   - The team group chat is the distribution channel: *"Vote on our kit"* links let teammates react. One captain sends it to 15–20 people, which is a built-in viral loop.

3. **Club and community kit competitions (the PUMA playbook, run at grassroots scale).**
   - For each Club Shop, or for the **Icarus Cup**, members and fans generate designs, the club shortlists, everyone votes, and the winner gets produced as the third kit or a limited-edition drop, pre-sold through the Club Shop.
   - Pre-sale before production means no inventory risk.

4. **Fan/supporter merch generator in Club Shops.** Supporters remix the club's kit into scarves, tees, training tops, and so on within brand-safe rules. That's new SKUs with no designer time.

### B. Revenue models to pitch

- **Free tier:** AI concepts in exchange for an email or phone number. This is lead generation.
- **"Concept Pack" deposit ($25–50, credited toward the order):** Unlocks high-res concepts, extra generations, and priority designer time. It replaces the punitive $50 ghosting fee with something people *want* to pay for.
- **Community drops and kit votes:** Pre-sold limited runs through Club Shops, with Icarus taking a margin on every fan purchase.
- **Premium "Icarus Studio" tier:** Senior designer, story-led research, custom crest work. AI frees up senior designers' time to sell this.
- **Licensing the tool (later):** A white-label kit generator for leagues, tournaments, or brands.

### C. Internal: make the designers faster (efficiency)

- **Fine-tuned model on the Icarus archive** (LoRA on an open model like FLUX). Concepts come out looking like *Icarus*, not generic AI. This is the long-term moat. Like adidas, start by using it **internally**.
- **Pattern and texture generation:** Seamless and vector patterns (for example, Recraft exports SVG and CMYK TIFF). Designers explore 20 directions in minutes.
- **Vectorizing and cleaning crests and logos** from customers' low-res uploads, which is a constant tax on any custom shop.
- **Print-file automation:** Take the design to sublimation-ready files across all sizes, generating the grading or nesting automatically. Doing this by hand for every size is tedious work that's easy to get wrong.
- **Story research assistant:** An LLM pulls history, symbols, and landmarks for the club's place or group to feed designers' ideas. This is Icarus's signature, now faster.

### D. Ops and marketing (worth a mention, not the focus)

- An AI assistant for order status, sizing, and FAQs, plus **roster/name/number collection** via chat or form with validation. Errors there cause expensive reprints.
- On-model product photos and try-on for every Club Shop product (FASHN, Botika), so there's no photoshoot needed for 2,000+ shops.
- AI-assisted reveal videos for kit launches. Clubs love posting these, and every one is free marketing for Icarus.

---

## 4. Recommended tool stack (buy first, build the moat)

| Layer | Options | Recommendation |
|---|---|---|
| **3D kit preview / configurator** | Zakeke, Kickflip (Shopify apps, fast); custom Three.js plus React (the PUMA/Hapticmedia approach) | Start with an off-the-shelf app or a small custom Three.js viewer. The **design template system** (zones, collars, sleeves) is what matters. |
| **Brief generation, intake, and support** | Claude (Anthropic), GPT, Gemini APIs | An LLM turns story into a structured design spec (palette, motifs, pattern type, collar, typography) as JSON, not just a prompt. |
| **Image/pattern generation** | FLUX (fine-tunable, can run via fal.ai or Replicate); Recraft (vector and seamless patterns); Google Gemini / OpenAI image models (strong at editing); Adobe Firefly (trained on licensed content, with IP indemnity on enterprise plans) | FLUX plus an Icarus LoRA for the house style. Recraft for vector and seamless output. Keep a "commercially safe" fallback. |
| **Vectorization** | Recraft vectorizer, Vectorizer.ai, Illustrator Image Trace | Any. Test on a set of real customer crests. |
| **On-model photos and try-on** | FASHN (API, from about $19–99/mo), Botika | FASHN for an API-driven pipeline across Club Shops. |
| **Video** | Runway, Google Veo, Kling | Launch and reveal clips. |
| **Commerce** | Shopify (already in use, it appears) | Keep it. Wire concepts, votes, and pre-orders into Club Shops. |

### The specific answer: customer AI mockups, then designers refine with AI

**The key is that the customer and the designer work on the same layered design, not on a flat AI image.** A layered design means a kit template with separate zones: base color, pattern, collar, crest, and type. The customer's AI picks fill those zones. The designer opens the same file and keeps going. If the customer's mockup is just a JPG from a generic generator (Design Jersey AI and the like), the designer has to redraw it from scratch, and much of the benefit is lost.

| Who | Tool | Why |
|---|---|---|
| **Customer: on the site** | **Zakeke** (Shopify app: 2D/3D customizer, AI features, print-ready output) as the 3D kit shell | Icarus already runs Shopify. Reviewers in sporting goods praise its 3D view and print-ready files. Watch-outs: its built-in AI is mainly product visuals, mobile UX gets mixed reviews, and team ordering (sizes and names) may need its own flow. |
| **Customer: generation engine** | **Recraft API**: build a custom style from Icarus reference kits, use exact brand colors, output vector and seamless patterns | Output stays **editable and printable**, and in the Icarus style. This is a custom integration into the configurator, not a checkbox. |
| **Customer: "see it on a player" image** | **GPT Image** or **FLUX** (most accurate edits); **Nano Banana** (Gemini) for cheap volume | Photoreal hero shots to share in the group chat. These are marketing images only, never the production file. |
| **Designer: refine** | **Adobe Illustrator + Firefly** (Generative Recolor for instant colorways, Firefly with IP indemnity on enterprise plans) | It's almost certainly what they already use. AI goes into the tool they already work in. |
| **Designer: explore and clean up** | **Recraft web app**: same custom style as the customer side; pattern variations; vectorizing low-res crests; mockups | One style shared on both sides, so customer concepts and designer output look like the same brand. |
| **Designer: quick client edits** | **GPT Image / Nano Banana** for conversational tweaks on presentation mockups ("thinner sash, gold trim") | Fast responses between design rounds. |

**Start without building anything:** Designers adopt Recraft and Firefly-in-Illustrator **now**. After intake, a designer sends 3 AI-assisted concepts within 24 hours. That tests whether customers respond before money goes into an on-site tool. Then add Zakeke plus the Recraft API to the site. Run a bake-off on 20 real past orders before committing, because image models change every few months.

**Architecture principle:** Don't let AI produce the final art freely. Use a structured design space. The LLM picks a base template, collar, pattern family, palette, and motif, and the generator fills **pattern zones only** on a real template. That way every concept is **manufacturable**, which is exactly the problem owayo warns about, and designers can take it over in their normal tools.

---

## 5. Phased plan

| When | Do | Measure |
|---|---|---|
| **0–30 days** | Internal: designers use off-the-shelf tools (Recraft, image models, an LLM for research) on live orders. Gather and label the design archive (10k designs plus metadata). Pick 2–3 KPIs. | Designer hours per order; rounds per order |
| **30–90 days** | Pilot an **AI concept step on the intake form** (template-constrained, 3–4 concepts on a 3D kit, shareable link). A/B test it against the current form. | Intake-to-paid conversion; ghost rate; time to first concept; share rate |
| **90–180 days** | Train the **Icarus-style model** on the archive. Run a **kit-vote competition** at the next Icarus Cup or with 3–5 flagship clubs. Launch the Concept Pack deposit. | Submissions; votes; pre-sales per drop; Concept Pack attach rate |
| **6–12 months** | Fan merch generator in Club Shops. Print-file automation. Explore white-labeling. | Club Shop revenue per club; new SKUs per club |

---

## 6. Risks to raise (it shows you've thought it through)

- **IP and trademarks:** People will type "make it look like Barça." Block pro club crests, sponsor logos, and brand marks in prompts and outputs. Require users to confirm they own their crest uploads.
- **Brand dilution:** Generic AI kits look samey, and Icarus's brand is originality. The fine-tuned model plus the human designer finish is what keeps it Icarus.
- **Printability:** Sublimation color, seams, and pattern scale across sizes. That's why the generator should be constrained to templates.
- **Designer morale:** Frame it as "AI does the blank page and the grunt work; you do the taste." Involve the design team in building it.
- **Expectations:** If the AI preview looks better than what can be printed, customers will be disappointed. Render on the actual fabric and template.
- **Cost:** Image generation costs cents per image, but free generations need limits (an email gate, generation caps).

---

## 7. How to run the conversation

**Open with questions, not a pitch.** Where AI helps depends on where the bottleneck actually is:

1. Of the intake forms you get, what % become paid orders? Where do people drop off?
2. How many designer hours go into an average order? How many rounds does it usually take?
3. How big is the ghosting problem? Is the $50 fee working?
4. What % of revenue comes from Club Shops vs. the initial team order? Do fans buy?
5. Is the constraint **demand** (more leads), **conversion**, **designer capacity**, or **average order size**?
6. What has the team already tried with AI? Is anyone on the team excited about it, or skeptical?
7. Do you have the archive organized (files plus metadata like club, colors, story)?

**Then map his answers to the plan:**
- Designer capacity is the constraint → lead with **internal tools plus AI concepts at intake**.
- Demand is the constraint → lead with the **shareable generator and kit-vote competitions**.
- Order size is the constraint → lead with **fan merch generation and community drops**.

**Three things to land:**
1. **"Your archive and your designers are the moat. AI should make both go further, not replace them."** Point to adidas training on its own archive and PUMA keeping experts in the loop.
2. **"The viral playbook is proven: generate, vote, make it real."** PUMA got 180k submissions for *one* club. Icarus has 2,000+ clubs and its own tournament.
3. **"Start with one measurable pilot."** The AI concept step on the intake form, A/B tested on conversion and designer hours. Small, cheap, and it'll show results within a quarter.

**Offer to help:** Sketch the intake-to-concept flow, run a quick prototype on 20 past designs, or scope out vendors.
