import { BigInt } from "@graphprotocol/graph-ts";
import {
  Contract,
  Approval,
  Transfer as TransferEvent,
} from "../generated/Contract/Contract";
import { LogNote as LogNoteEvent } from "../generated/Pot/Pot";
import { Transfer, LogNote } from "../generated/schema";

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

export function handleLogNote(event: LogNoteEvent): void {
  //   event LogNote(
  //     bytes4   indexed  sig,
  //     address  indexed  usr,
  //     bytes32  indexed  arg1,
  //     bytes32  indexed  arg2,
  //     bytes             data
  // ) anonymous;

  let noteId = event.transaction.hash.toHexString();

  let note = new LogNote(noteId);
  note.timestamp = event.block.timestamp.toString();
  note.sig = event.params.sig;
  note.usr = event.params.usr;
  note.arg1 = event.params.arg1;
  note.arg2 = event.params.arg2;
  note.data = event.params.data;

  note.save();
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
