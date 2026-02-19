# Intercom Guardian Skill

This fork adds a Guardian Protection Layer.

## New Guardian Commands

POST /guardian

Body:
{
  "wallet": "0x123..."
}

Response:
{
  "wallet": "0x123...",
  "reputation": "Trusted | Normal | Suspicious",
  "blocked": false
}

---

## Agent Usage

Agents must route wallet interactions through Guardian before execution.

Guardian Responsibilities:

- Rate limiting
- Abuse detection
- Reputation scoring
- Suspicious blocking
