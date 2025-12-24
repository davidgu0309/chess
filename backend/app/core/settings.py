from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    env: str = "dev" # dev | prod

    api_v1_prefix: str = "/api/v1"

    database_url: str = "postgresql+psycopg://postgres:postgres@localhost:5432/chess"

    supabase_jwks_url: str = ""
    supabase_issuer: str = ""
    supabase_audience: str = ""

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=False,
        extra="ignore"
    )

settings = Settings()