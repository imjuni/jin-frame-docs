---
lang: en-US
title: Constructor
description: Help for More short Constructor
---

## For more short Constructor of JinFrame

Some of boring step what constructor of JinFrame. Like that,

```ts
class Test001PostFrame extends JinEitherFrame {
  @JinEitherFrame.param()
  public readonly passing: string;

  @JinEitherFrame.body()
  public readonly username: string[];

  @JinEitherFrame.body()
  public readonly password: string;

  // JinConstructorType omit 'host', 'path', 'method', 'contentType'
  constructor(args: JinOmitConstructorType<Test001PostFrame, 'usename'>) {
    super({
      host: 'http://some.api.google.com/jinframe/:passing',
      method: 'POST',
    });

    this.passing = args.passing;
    this.username = args.username;
    this.password = args.password;
  }
}
```

Every class member variable initialize code is resemble and verbose. So JinFrame do automate this progress like that:

```ts
(Object.keys(args) as Array<keyof typeof args>).forEach((key) => {
  (this[key] as any) = args[key];
});
```

So, that code can be rewrite like that:

```ts
class Test001PostFrame extends JinEitherFrame {
  @JinEitherFrame.param()
  public readonly passing!: string;

  @JinEitherFrame.body()
  public readonly username!: string[];

  @JinEitherFrame.body()
  public readonly password!: string;

  // JinConstructorType omit 'host', 'path', 'method', 'contentType'
  constructor(args: JinOmitConstructorType<Test001PostFrame, 'usename'>) {
    super({
      ...args,
      host: 'http://some.api.google.com/jinframe/:passing',
      method: 'POST',
    });
  }
}
```
