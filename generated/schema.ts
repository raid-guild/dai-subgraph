// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Transfer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Transfer entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Transfer entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Transfer", id.toString(), this);
  }

  static load(id: string): Transfer | null {
    return store.get("Transfer", id) as Transfer | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): string {
    let value = this.get("timestamp");
    return value.toString();
  }

  set timestamp(value: string) {
    this.set("timestamp", Value.fromString(value));
  }

  get src(): Bytes {
    let value = this.get("src");
    return value.toBytes();
  }

  set src(value: Bytes) {
    this.set("src", Value.fromBytes(value));
  }

  get dst(): Bytes {
    let value = this.get("dst");
    return value.toBytes();
  }

  set dst(value: Bytes) {
    this.set("dst", Value.fromBytes(value));
  }

  get wad(): BigInt {
    let value = this.get("wad");
    return value.toBigInt();
  }

  set wad(value: BigInt) {
    this.set("wad", Value.fromBigInt(value));
  }
}

export class Join extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Join entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Join entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Join", id.toString(), this);
  }

  static load(id: string): Join | null {
    return store.get("Join", id) as Join | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): string {
    let value = this.get("timestamp");
    return value.toString();
  }

  set timestamp(value: string) {
    this.set("timestamp", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get wad(): BigInt {
    let value = this.get("wad");
    return value.toBigInt();
  }

  set wad(value: BigInt) {
    this.set("wad", Value.fromBigInt(value));
  }
}

export class Exit extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Exit entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Exit entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Exit", id.toString(), this);
  }

  static load(id: string): Exit | null {
    return store.get("Exit", id) as Exit | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): string {
    let value = this.get("timestamp");
    return value.toString();
  }

  set timestamp(value: string) {
    this.set("timestamp", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get wad(): BigInt {
    let value = this.get("wad");
    return value.toBigInt();
  }

  set wad(value: BigInt) {
    this.set("wad", Value.fromBigInt(value));
  }
}
