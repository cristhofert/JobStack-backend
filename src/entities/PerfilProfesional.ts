import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany, OneToOne, ManyToMany, JoinTable } from 'typeorm';
import { Estudio } from './Estudio';
import { Experiencia } from './Experiencia';
import { Certificacion } from './Certificacion';
import { Idioma } from './Idioma';
import { RegistroProfesional } from './RegistroProfesional'
import { Oferta } from './Oferta';

@Entity()
export class PerfilProfesional extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    apellido: string;

    @Column()
    descripcion: string;

    @OneToMany(() => Estudio, estudio => estudio.perfilProfesional, {
        cascade: true,
    })
    estudios: Estudio[];

    @OneToMany(() => Experiencia, experiencia => experiencia.perfilProfesional,{
        cascade: true,
    })
    experiencias: Experiencia[];

    @OneToMany(() => Certificacion, certificacion => certificacion.perfilProfesional,{
        cascade: true,
    })
    certificaciones: Certificacion[];

    @OneToMany(() => Idioma, idioma => idioma.perfilProfesional,{
        cascade: true,
    })
    idiomas: Idioma[];

    @OneToOne(() => RegistroProfesional, registroProfesional => registroProfesional.perfil)
    registro: RegistroProfesional;

    @ManyToMany(() => Oferta, oferta => oferta.aplicantes)
    @JoinTable()
    postulaciones: Oferta[];

    @Column()
    github: string;

    @Column()
    linkedin: string;

    @Column()
    twitter: string;

    @Column()
    facebook: string;

}