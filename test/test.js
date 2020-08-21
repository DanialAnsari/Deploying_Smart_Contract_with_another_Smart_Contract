const { accounts, contract } = require('@openzeppelin/test-environment');
const {expect}=require('chai');
const { isTopic } = require('web3-utils')
const myContract = contract.fromArtifact('D');
let d_contract
let add;

describe('Set_Get', function () {
  const [owner, other] =  accounts;
  before(async function () {

    d_contract = await myContract.new(add);

  });

  it('Making sure address is being generated', async function () {

    await d_contract.newContract();
  });

  it('Making sure function of deployed contract are being called', async function () {

    await d_contract.useFunction();
  });

})