from fastapi import FastAPI
from app.api.v1.health import router as health_router
from app.core.settings import settings

app = FastAPI()

app.include_router(health_router, prefix=settings.api_v1_prefix)