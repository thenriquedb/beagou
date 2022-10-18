import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Uf } from "./Uf";
import { City } from "./City";

@Entity("institution_address")
export class Address {
  @PrimaryColumn({ length: 36 })
  id: string;

  @Column()
  street: string;

  @Column()
  neighborhood: string;

  @Column({ nullable: true })
  complement: string;

  @CreateDateColumn()
  created_at: string;

  @ManyToOne(() => City, (city) => city.zip_code)
  @JoinColumn({ name: "zip_code" })
  city: City;
  zip_code: string;

  @ManyToOne(() => Uf, (uf) => uf.initials)
  @JoinColumn({ name: "uf_initials" })
  uf: Uf;
  uf_initials: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
