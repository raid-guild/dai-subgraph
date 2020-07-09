import { BigInt } from "@graphprotocol/graph-ts";
import {
  Contract,
  Approval,
  LogNote,
  Transfer as TransferEvent,
} from "../generated/Contract/Contract";
import { Transfer } from "../generated/schema";

export function handleTransfer(event: TransferEvent): void {
  // event Transfer(address indexed src, address indexed dst, uint wad);

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

export function handleApproval(event: Approval): void {}

export function handleLogNote(event: LogNote): void {}

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
