import { Repository } from 'typeorm';
import { Setting } from '../entity/Settings';
import { AppDataSource } from '../data-source';

export const SettingRepository = AppDataSource.getRepository(Setting);

