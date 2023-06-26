import { ponder } from "@/generated";
import { randomUUID } from "crypto";

ponder.on("LPFarming:Withdraw", async ({ event, context }) => {
  // console.log(event.block.timestamp);

  const { Withdraw } = context.entities;

  const withdraw = await Withdraw.create({
    id: event.transaction.hash.concat(String(event.log.logIndex)),
    data: {
      amount: event.params.amount,
      user: event.params.user,
      pid: event.params.pid,
      timestamp: event.block.timestamp,
    },
  });
});

ponder.on("LPFarming:Claim", async ({ event, context }) => {
  // console.log(event.block.timestamp);

  const { Claim } = context.entities;

  const claim = await Claim.create({
    id: event.transaction.hash.concat(
      String(event.log.logIndex).concat(randomUUID())
    ),
    data: {
      amount: event.params.amount,
      user: event.params.user,
      pid: event.params.pid,
      timestamp: event.block.timestamp,
    },
  });
});

ponder.on("LPFarming:Deposit", async ({ event, context }) => {
  const { Deposit } = context.entities;

  const deposit = await Deposit.create({
    id: event.transaction.hash.concat(String(event.log.logIndex)),
    data: {
      amount: event.params.amount,
      user: event.params.user,
      pid: event.params.pid,
      timestamp: event.block.timestamp,
    },
  });
});
