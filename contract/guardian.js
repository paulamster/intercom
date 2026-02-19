const memory = {};

export function guardianCheck(wallet) {
  if (!memory[wallet]) {
    memory[wallet] = { count: 0, last: Date.now() };
  }

  memory[wallet].count++;

  const count = memory[wallet].count;

  let reputation = "Trusted";
  let blocked = false;

  if (count > 3 && count <= 5) {
    reputation = "Normal";
  }

  if (count > 5) {
    reputation = "Suspicious";
    blocked = true;
  }

  return {
    wallet,
    reputation,
    blocked,
    totalRequests: count
  };
}
