import { Pokemon } from '@src/domain/typeorm/entities/pokemon';
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryColumn } from 'typeorm';
import { MoveEntity } from './move';
import { TypeEntity } from './types';

@Entity('tb_pokemon')
export class PokemonEntity {
  constructor(data: Partial<PokemonEntity | Pokemon>) {
    if (data) Object.assign(this, data);
  }

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  heigth: number;

  @Column()
  weight: number;

  @Column()
  location_area: string;

  @Column()
  sprite_front_default: string;

  @Column({ nullable: true })
  sprite_front_female: string;

  @Column()
  sprite_front_shiny: string;

  @Column({ nullable: true })
  sprite_front_shiny_female: string;

  @Column()
  sprite_back_default: string;

  @Column({ nullable: true })
  sprite_back_female: string;

  @Column()
  sprite_back_shiny: string;

  @Column({ nullable: true })
  sprite_back_shiny_female: string;

  @Column()
  hp: number;

  @Column()
  attack: number;

  @Column()
  defense: number;

  @Column()
  special_attack: number;

  @Column()
  special_defense: number;

  @Column()
  speed: number;

  @CreateDateColumn()
  created_at?: Date;

  @ManyToMany(() => MoveEntity, (move) => move.pokemon, { nullable: false })
  @JoinTable()
  move: MoveEntity[];

  @ManyToMany(() => TypeEntity, (type) => type.pokemon, { nullable: false })
  @JoinTable()
  type: TypeEntity[];

  public toPlainClass(): Pokemon {
    return new Pokemon(
      {
        name: this.name,
        heigth: this.heigth,
        weight: this.weight,
        location_area: this.location_area,
        sprite_front_default: this.sprite_front_default,
        sprite_front_female: this.sprite_front_female,
        sprite_front_shiny: this.sprite_front_shiny,
        sprite_front_shiny_female: this.sprite_front_shiny_female,
        sprite_back_default: this.sprite_back_default,
        sprite_back_female: this.sprite_back_female,
        sprite_back_shiny: this.sprite_back_shiny,
        sprite_back_shiny_female: this.sprite_back_shiny_female,
        hp: this.hp,
        attack: this.attack,
        defense: this.defense,
        special_attack: this.special_attack,
        special_defense: this.special_defense,
        speed: this.speed,
      },
      this.id,
    );
  }
}
