import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { UserModule } from 'src/user/user.module';

describe('UserController (e2e)', () => {
  let user: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [UserModule],
    }).compile();

    user = moduleFixture.createNestApplication();
    await user.init();
  });

  it('/ (GET)', () => {
    return request(user.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('/ (POST)', () => {
    return request(user.getHttpServer())
      .post('/products')
      .expect(201)
      .expect('Hello World!');
  });
});
