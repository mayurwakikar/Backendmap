import { Point } from 'geojson';
import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Mapbox1 {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    lat:string;

    @Column()
    long:string;
    
    @Column()
    name:string;

    @Column()
    city_name:string;

    @Index({ spatial: true })
     @Column({
    type: 'geography',
    spatialFeatureType: 'Point',
    srid: 4326,
    nullable: true,

  

    //ne commnetd added
  })
  location:Point
}
