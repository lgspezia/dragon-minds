export class Dragon {
    private _name: string;
    // private _slug: string;
    private _type: string;
    private _histories: Array<string>; // string[]
    private _createdAt: string;
    private _updatedAt: string;
    private _id: string;
    // private createdAt: string;
    // private name: string;
    // private type: string;
    // private histories: Array<any>;

    constructor(data: any) {
        this._id = data.id || '';
        this._name = data.name || '';
        // this._slug = data.slug || '';
        this._type = data.type || '';
        this._histories = data.histories || [];
        this._createdAt = data.createdAt || '';
        this._updatedAt = data.updatedAt || '';
    }

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    // get slug(): string {
    //     return this._slug;
    // }

    // set slug(slug: string) {
    //     this._slug = slug;
    // }

    get type(): string {
        return this._type;
    }

    set type(type: string) {
        this._type = type;
    }

    get histories(): string[] {
        return this._histories;
    }

    set histories(histories: string[]) {
        this._histories = histories;
    }

    get createdAt(): string {
        return this._createdAt;
    }

    set createdAt(createdAt: string) {
        this._createdAt = createdAt;
    }

    get updatedAt(): string {
        return this._updatedAt;
    }

    set updatedAt(updatedAt: string) {
        this._updatedAt = updatedAt;
    }

}
