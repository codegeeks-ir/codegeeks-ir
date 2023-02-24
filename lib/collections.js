class Collection {
  static type;

  constructor(frontMatter, form) {
    this.frontMatter = frontMatter;
    this.form = form;
  }

  static getDateString(date, time) {
    return date.toString() + time.toString();
  }

  static createInstance(type) {
    Collection.type = type;
    switch (type) {
      case "authors":
        return new Events();
        break;
      case "events":
        return new Events();
        break;

      default:
        break;
    }
  }
}

class Events extends Collection {
  constructor(frontMatter, form) {
    this.frontMatter = this.initializeFrontMatter();
    this.form = {
      title: "",
      lecturer: "",
      bio: "",
      githubID: "",
      date: "",
      time: "",
      location: "",
      details: "",
      fileName: "",
    };
  }

  initializeFrontMatter() {
    return `---
        title: "${this.form.title}"
        lecturer: "${this.form.lecturer}"
        bio: "${this.form.bio}"
        githubID: "${this.form.githubID}"
        date: "${Collection.getDateString(this.form.date, this.form.time)}"
        location: "${this.form.location}"
        ---
    
        `;
  }
}
