const main = async () => {
  try {
    const EventContractProject = await hre.ethers.getContractFactory(
      "EventContract"
    );
    const eventcontractproject = await EventContractProject.deploy();
    await eventcontractproject.deployed();

    console.log("EventContract deployed to:", eventcontractproject.address);
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
  
main();