/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type NetworkDeviceType = "router" | "switch" | "access-point" | "server" | "modem" | "firewall";

/**
 * IPAM Configuration File
 */
export interface IPAM {
  communities: Community[];
  /**
   * Circuits
   */
  circuits: Circuit[];
  /**
   * External Circuits
   */
  circuitLocations: CircuitLocation[];
  /**
   * Contact Information
   */
  contacts: Contact[];
  /**
   * Networks
   */
  networks: Network[];
}
/**
 * Community
 */
export interface Community {
  /**
   * Community Contact ID
   */
  contact?: string;
  /**
   * Community Friendly Name
   */
  name: string;
  /**
   * Short form community code
   */
  id: string;
  sites: {
    /**
     * Site short id
     */
    id: string;
    name: string;
    devices?: Device[];
  }[];
}
/**
 * Network Device
 */
export interface Device {
  /**
   * Chained ID
   */
  id: string;
  /**
   * Friendly name
   */
  name: string;
  type?: NetworkDeviceType;
}
/**
 * Community Circuit
 */
export interface Circuit {
  /**
   * Circuit ID
   */
  id: string;
  sideA?: {
    /**
     * Circuit Location Id
     */
    id?: string;
    [k: string]: unknown;
  };
  sideZ?: {
    /**
     * Circuit Location Id
     */
    id?: string;
    [k: string]: unknown;
  };
  speed?: string;
  [k: string]: unknown;
}
/**
 * Traditional external circuits
 */
export interface CircuitLocation {
  /**
   * External circuit id
   */
  id?: string;
  /**
   * External circuit provider
   */
  provider?: string;
  /**
   * Community ID
   */
  communuity?: string;
  /**
   * Address provided to external provider
   */
  address?: string;
  demarcSpeed?: "10M" | "100M" | "200M" | "300M" | "500M" | "1G" | "5G" | "10G";
  [k: string]: unknown;
}
/**
 * Community Contact
 */
export interface Contact {
  /**
   * Unique contact ID
   */
  id: string;
  /**
   * Contact Full Name
   */
  name: string;
}
/**
 * Network
 */
export interface Network {
  /**
   * Network Prefix
   */
  prefix?: string;
  description?: string;
  circuit?: Networkcircuit;
  /**
   * Contact ID
   */
  contact?: string;
  hosts?: {
    /**
     * Host IP Address
     */
    ip: string;
    /**
     * Hostname for reverse DNS creation
     */
    hostname?: string;
    description?: string;
    device?: NetworkDeviceLink;
  }[];
  ranges?: {
    start: string;
    end: string;
    description?: string;
    type?: "DHCP" | "RESERVED" | "STATIC";
  }[];
  /**
   * Children Networks
   */
  networks?: Network[];
}
/**
 * NetworkCircuit
 */
export interface Networkcircuit {
  /**
   * Circuit Id
   */
  id: string;
  /**
   * Circuit Speed
   */
  speed?: string;
}
/**
 * Link a Network to a device
 */
export interface NetworkDeviceLink {
  /**
   * Device id
   */
  id: string;
  /**
   * Device interface
   */
  interface?: string;
}
