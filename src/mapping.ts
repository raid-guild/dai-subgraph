import { BigInt, ByteArray, Bytes } from "@graphprotocol/graph-ts";
import { Transfer as TransferEvent } from "../generated/Contract/Contract";
import { LogNote } from "../generated/Pot/Pot";
import { Transfer, Join, Exit } from "../generated/schema";

export function handleTransfer(event: TransferEvent): void {
  let transferId = event.address
    .toHexString()
    .concat(event.transaction.hash.toHexString());

  let transfer = new Transfer(transferId);
  transfer.timestamp = event.block.timestamp.toString();
  transfer.src = event.params.src;
  transfer.dst = event.params.dst;
  transfer.wad = event.params.wad;

  transfer.save();
}

export function handleJoinEvent(event: LogNote): void {
  let joinId = event.params.usr
    .toHexString()
    .concat("-join-")
    .concat(event.transaction.hash.toHexString());
  let join = new Join(joinId);
  join.timestamp = event.block.timestamp.toString();
  join.address = event.params.usr;

  let data = event.params.data;
  let dataString = data.toHexString();
  let wadString = dataString.substr(10, 64);
  let wadBytes = ByteArray.fromHexString(wadString).reverse();
  let wad = BigInt.fromSignedBytes(wadBytes as Bytes);
  join.wad = wad;

  join.save();
}

export function handleExitEvent(event: LogNote): void {
  let exitId = event.params.usr
    .toHexString()
    .concat("-exit-")
    .concat(event.transaction.hash.toHexString());
  let exit = new Join(exitId);
  exit.timestamp = event.block.timestamp.toString();
  exit.address = event.params.usr;

  let data = event.params.data;
  let dataString = data.toHexString();
  let wadString = dataString.substr(10, 64);
  let wadBytes = ByteArray.fromHexString(wadString).reverse();
  let wad = BigInt.fromSignedBytes(wadBytes as Bytes);
  exit.wad = wad;

  exit.save();
}

// let contract = Contract.bind(event.address)
// - contract.DOMAIN_SEPARATOR(...)
// - contract.PERMIT_TYPEHASH(...)
// - contract.allowance(...)
// - contract.approve(...)
// - contract.balanceOf(...)
// - contract.decimals(...)
// - contract.name(...)
// - contract.nonces(...)
// - contract.symbol(...)
// - contract.totalSupply(...)
// - contract.transfer(...)
// - contract.transferFrom(...)
// - contract.version(...)
// - contract.wards(...)
