
import { BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Role } from '../roles/roles.entity'
import { UserDetails } from './users.details.entity'

@Entity('users')
export class User extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'varchar', unique: true, length: 25, nullable: false })
    username: string

    @Column({ type: 'varchar', nullable: false })
    email: string

    @Column({ type: 'varchar', nullable: false })
    password: string

    @Column({ type: 'varchar', default: 'ACTIVE', length: 8 })
    status: string

    @Column({ type: 'timestamp', name:'created_at' })
    createdAt: Date

    @Column({ type: 'timestamp', name:'updated_at' })
    updatedAt: Date

    // Relations
    @OneToOne( type => UserDetails, { cascade: true, nullable: false, eager: true } )
    @JoinColumn({ name: 'detail_id' })
    details: UserDetails

    @ManyToOne( type => Role , role => role.users )
    @JoinTable({ name: 'user_roles' })
    roles: Role[]

}