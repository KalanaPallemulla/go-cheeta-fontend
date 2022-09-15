export const calculateCost = (p, d) => {
  let cost;
  if (p === "Kandy" && d === "Nugegoda") {
    return (cost = 8000);
  }
  if (p === "Kandy" && d === "Galle") {
    return (cost = 15000);
  }
  if (p === "Kandy" && d === "Gampaha") {
    return (cost = 7000);
  }
  if (p === "Kandy" && d === "Kurunagala") {
    return (cost = 6000);
  }
  if (p === "Kandy" && d === "Jafna") {
    return (cost = 25000);
  }

  if (p === "Nugegoda" && d === "Kandy") {
    return (cost = 8000);
  }
  if (p === "Nugegoda" && d === "Galle") {
    return (cost = 8000);
  }
  if (p === "Nugegoda" && d === "Gampaha") {
    return (cost = 5000);
  }
  if (p === "Nugegoda" && d === "Kurunalle") {
    return (cost = 7000);
  }
  if (p === "Nugegoda" && d === "Jafna") {
    return (cost = 30000);
  }

  if (p === "Galle" && d === "Kandy") {
    return (cost = 15000);
  }
  if (p === "Galle" && d === "Nugegoda") {
    return (cost = 8000);
  }
  if (p === "Galle" && d === "Gampaha") {
    return (cost = 12000);
  }
  if (p === "Galle" && d === "Kurunalle") {
    return (cost = 17000);
  }
  if (p === "Galle" && d === "Jafna") {
    return (cost = 40000);
  }

  if (p === "Gampaha" && d === "Kandy") {
    return (cost = 7000);
  }
  if (p === "Gampaha" && d === "Nugegoda") {
    return (cost = 8000);
  }
  if (p === "Gampaha" && d === "Galle") {
    return (cost = 12000);
  }
  if (p === "Gampaha" && d === "Kurunalle") {
    return (cost = 7000);
  }
  if (p === "Gampaha" && d === "Jafna") {
    return (cost = 28000);
  }

  if (p === "Jafna" && d === "Kandy") {
    return (cost = 25000);
  }
  if (p === "Jafna" && d === "Nugegoda") {
    return (cost = 8000);
  }
  if (p === "Jafna" && d === "Galle") {
    return (cost = 12000);
  }
  if (p === "Jafna" && d === "Kurunalle") {
    return (cost = 25000);
  }
  if (p === "Jafna" && d === "Gampaha") {
    return (cost = 28000);
  }

  if (p === "Kurunagala" && d === "Kandy") {
    return (cost = 6000);
  }
  if (p === "Kurunagala" && d === "Nugegoda") {
    return (cost = 7000);
  }
  if (p === "Kurunagala" && d === "Galle") {
    return (cost = 17000);
  }
  if (p === "Kurunagala" && d === "Jafna") {
    return (cost = 25000);
  }
  if (p === "Kurunagala" && d === "Gampaha") {
    return (cost = 7000);
  }
  if (p === d) {
    return null;
  }
};
