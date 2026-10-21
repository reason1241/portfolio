# Portfolio design QA

final result: passed

## Reference and rendered evidence

- Source visual: `/Users/myeongsunchoi/.codex/generated_images/01a15659-f543-7d93-869d-e6a98ca088a1/exec-2e4395ef-ad78-4ebf-837d-6425a90039ca.png` (first displayed design).
- Implementation: `http://localhost:4173/`.
- Desktop screenshot: `/private/tmp/portfolio-desktop.png`.
- Mobile screenshot: `/private/tmp/portfolio-mobile.png`.
- Full-view comparison: `/private/tmp/portfolio-comparison.png` (source and implementation in one image).
- Focused header comparison: `/private/tmp/portfolio-header-comparison.png`.
- Source: 1190 × 1322 pixels. Desktop CSS viewport: 1190 × 1322, screenshot: 1190 × 1988 (full document). Both images use one image pixel per CSS pixel; no stretching or density scaling used in the comparison artifact. The longer implementation reflects the approved real content replacing placeholder entries. The source occupies its natural height with unused canvas below it.
- Mobile CSS viewport: 390 × 844; additional overflow check at 320 × 800. No mobile source was supplied; mobile is an adaptation of the selected single-column desktop design.
- State: initial page, white theme, all content expanded. No authentication or interactive panels.

## Findings and comparison

No actionable P0/P1/P2 findings remain.

- Typography: Arial/Helvetica matches the reference's plain sans-serif direction. Bold name and headings, regular body text, subordinate gray dates. Body is 16px, with 17px intro and 46px desktop name. No clipped text or truncated headings. Focused header evidence confirms hierarchy and wrapping; longer intro is intentional and user approved.
- Spacing/layout: centered 880px column, generous outer margins, thin section rules, desktop dates and links aligned right. Actual experience bullets and third job extend the page. Mobile stacks dates and links, preserves 20px margins, and shows no horizontal overflow at 390px or 320px.
- Colors/tokens: white background, near-black headings, gray body, blue underlined links, pale gray rules. Body and link colors are readable against white. Keyboard focus has a visible blue outline.
- Images/assets: the chosen design has no image, logo, illustration, or icon assets to recreate. No placeholders or decorative substitutions were introduced.
- Copy/content: reviewed introduction, four jobs, three agreed projects, and two education entries. Team project identified. OVERDARE included as the most recent role following the user’s clarification; full downloadable resume retained. Removed date decoration and repeated contact block in favor of short footer, as discussed. No unverified usage metric, DoRA claim, or source slide URL appears in page content.

## Comparison history

- Initial desktop and mobile review: no blocking layout differences. A minor leading separator before the stacked mobile job title was removed as P3 polish.
- Final screenshots captured after that fix. Same desktop viewport retained. Full-view and header comparison inspected together; approved content changes explain the increased page height and intro wrapping.

## Verification

- Production build passed.
- Desktop and narrow-screen document width matches viewport; no horizontal overflow.
- Browser warning/error log empty at review.
- Skip link activated with Enter; navigates to `#experience`.
- Resume link clicked; opens the local PDF in a separate browser tab. Served PDF has correct file signature and matches the supplied SWE resume.
- Inspected all link destinations, including contact, profiles, project demos, and repositories. External target links include `noopener noreferrer`. Email links checked as destinations without sending a message.
- HTML contains `noindex, nofollow`; robots permits HTML access and disallows PDF crawling. This is search guidance, not access control. PDF indexing limitations documented in README.
- Production asset paths, domain file, and resume verified; no slide URL in authored content.
- GitHub deployment workflow prepared, not executed. DNS and repository Pages settings still require setup. No external publication performed.

## Residual test gaps

- Print stylesheet included but not visually verified through an OS print dialog.
- External sites may require login or change independently; their continued availability is outside this static page's behavior.

## Implementation checklist

- [x] Implement selected design with approved content.
- [x] Inspect desktop and mobile rendering.
- [x] Verify local links, metadata, production build, and private-source exclusion.
- [x] Compare source and implementation in combined evidence.
- [ ] Publish only when requested and configure custom domain.

## OVERDARE content update

The user clarified that the earlier omission reflected uncertainty about details and requested inclusion. Added Data Engineer, May–October 2024, as the newest role. Used only supplied responsibilities: game-log data pipelines, dbt transformations in Snowflake, and Kafka pipeline monitoring on Kubernetes. Role labels now use entry-specific data. Production build and diff whitespace checks passed; browser rendering confirms the title, dates, and responsibilities. Latest experience screenshot: `/private/tmp/portfolio-overdare.png`. No style or interaction changes were made. Earlier desktop comparison evidence describes the original page before this added entry.
