if (process.argv.length < 4 ) throw new Error("Proposal missing");
  const ProposalNumber = process.argv[2];

 const proposal = await ballotContract.proposals(ProposalNumber);
 console.log('Proposal Name :  'ethers.utils.parseBytes32String(proposal.name));
 console.log('Proposal Vote Count :  'proposal.voteCount); 
