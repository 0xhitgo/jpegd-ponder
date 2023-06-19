import { ponder } from "@/generated";

ponder.on("LPFarming:Claim", async ({ event, context }) => {
  console.log(event.params);
});

ponder.on("LPFarming:ClaimAll", async ({ event, context }) => {
  console.log(event.params);
});
