import { AppDataSource } from "./data-source";
import { User } from "./entity/User";
import { Setting } from "./entity/Settings";

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...");
    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.email = "muskan@hash.com";
    user.password = "muskan";
    await AppDataSource.manager.save(user);
    console.log("Saved a new user with id: " + user.id);

    console.log("Inserting settings for the user...");
    const settings = new Setting();
    settings.isNotificationEnabled = true;
    settings.isNewDashboardEnabled = false;
    settings.timezone = "UTC";
    settings.user = user; // Associate settings with the created user
    await AppDataSource.manager.save(settings);
    console.log("Saved settings for user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await AppDataSource.manager.find(User, { relations: ["settings"] });
    console.log("Loaded users with settings: ", users);

    console.log("Here you can setup and run express / fastify / any other framework.");

}).catch(error => console.log(error));

export { User } from './entity/User';
export { Setting } from './entity/Settings';
export { UserRepository } from './repositories/User.repository';
export { SettingRepository } from './repositories/Settings.Repository';
export { AppDataSource } from './data-source';



